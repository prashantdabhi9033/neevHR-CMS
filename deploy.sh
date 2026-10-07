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


echo "==> Done. Live at https://www.neevhr.com"
