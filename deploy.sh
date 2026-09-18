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

echo "==> Building"
pnpm build

echo "==> Restarting app"
pm2 restart neevhr

echo "==> Done. Live at https://www.neevhr.com"
