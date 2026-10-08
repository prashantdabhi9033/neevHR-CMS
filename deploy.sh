#!/usr/bin/env bash
# Redeploy the NeevHR marketing site after a code change.
# Run on the server:  bash deploy.sh
set -euo pipefail

APP_DIR="/var/www/neevhr"
cd "$APP_DIR"

echo "==> Pulling latest code"
git pull

echo "==> Installing dependencies"
pnpm install --frozen-lockfile

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
pm2 restart neevhr --update-env

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


