#!/usr/bin/env bash
# Redeploy the NeevHR marketing site after a code change.
# Run on the server:  bash deploy.sh
set -euo pipefail

APP_DIR="/var/www/neevhr"
cd "$APP_DIR"

echo "==> Pulling latest code"
git pull

# Node 24 LTS (Krypton), 24.22.1 = the 20 Oct 2026 security release (owner, 22 Oct 2026). Installed from the
# NodeSource 24.x apt repo (how DEPLOY.md set the server up). Any 24.x at or above this version is accepted, so a later
# security patch is never downgraded; anything older (or another major) is upgraded before the build, and the deploy
# stops if the upgrade did not take, so the site is never rebuilt on the wrong Node.
REQUIRED_NODE="24.22.1"
SUDO=""
if [ "$(id -u)" -ne 0 ]; then SUDO="sudo -n"; fi
node_ok() {
  command -v node >/dev/null 2>&1 || return 1
  local v; v="$(node -v | sed 's/^v//')"
  [ "${v%%.*}" = "24" ] || return 1
  [ "$(printf '%s\n%s\n' "$REQUIRED_NODE" "$v" | sort -V | head -n1)" = "$REQUIRED_NODE" ]
}
NODE_CHANGED=0
if ! node_ok; then
  echo "==> Upgrading Node to ${REQUIRED_NODE} (was $(node -v 2>/dev/null || echo none))"
  if ! grep -rqs "deb.nodesource.com/node_24.x" /etc/apt/sources.list.d/; then
    curl -fsSL https://deb.nodesource.com/setup_24.x | $SUDO bash -
  fi
  $SUDO apt-get update -y
  $SUDO apt-get install -y "nodejs=${REQUIRED_NODE}-1nodesource1" || $SUDO apt-get install -y nodejs
  hash -r
  if ! node_ok; then
    echo "ERROR: Node is $(node -v 2>/dev/null || echo missing), need ${REQUIRED_NODE} or a later 24.x. Deploy stopped before the build." >&2
    exit 1
  fi
  NODE_CHANGED=1
fi
echo "==> Node $(node -v)"
# pnpm comes from corepack (pinned by package.json packageManager); re-enable after a Node change.
corepack enable

echo "==> Installing dependencies"
pnpm install --frozen-lockfile
if [ "$NODE_CHANGED" = "1" ]; then
  # Native modules (sharp) were built for the old Node: rebuild them for this one.
  pnpm rebuild
fi

# Ensure GA4 Measurement ID is set in .env
if [ -f .env ]; then
  if ! grep -q "^NEXT_PUBLIC_GA_ID=" .env; then
    echo 'NEXT_PUBLIC_GA_ID="G-ZDBTJ2CRCZ"' >> .env
  elif grep -q '^NEXT_PUBLIC_GA_ID=""' .env || grep -q "^NEXT_PUBLIC_GA_ID=''" .env; then
    sed -i 's/^NEXT_PUBLIC_GA_ID=.*/NEXT_PUBLIC_GA_ID="G-ZDBTJ2CRCZ"/' .env
  fi
fi

echo "==> Running database migrations"
set -a; . ./.env; set +a
pnpm payload migrate

echo "==> Building"
pnpm build

echo "==> Restarting app"
if [ "$NODE_CHANGED" = "1" ]; then
  # The PM2 daemon keeps running on the Node it started with; reload it onto the new Node first.
  pm2 update
fi
# Start the app if PM2 does not know it (for example after a daemon reload with an old saved list), else restart it;
# then save the list so a reboot or the next daemon reload brings the site back.
if pm2 describe neevhr >/dev/null 2>&1; then
  pm2 restart neevhr --update-env
else
  pm2 start pnpm --name neevhr --cwd "$APP_DIR" -- start
fi
pm2 save

echo "==> Ensuring Nginx is running"
systemctl restart nginx || true
systemctl status nginx --no-pager || true

echo "==> Firewall check"
ufw status || true

echo "==> Waiting 5s for Next.js to initialize"
sleep 5

echo "==> PM2 status and logs"
pm2 describe neevhr || true
pm2 logs neevhr --lines 30 --nostream || true

echo "==> Checking listening ports"
ss -tulpn | grep -E '3000|3100|nginx|node' || true

echo "==> Nginx upstream config"
cat /etc/nginx/sites-enabled/* 2>/dev/null || true

echo "==> Testing local app endpoints"
curl -sI http://127.0.0.1:3000 | head -n 5 || true
curl -sI http://127.0.0.1:3100 | head -n 5 || true

echo "==> Testing local Nginx (HTTPS)"
curl -skI https://127.0.0.1 | head -n 5 || true
curl -skI https://www.neevhr.com | head -n 5 || true

echo "==> Done. Live at https://www.neevhr.com"


