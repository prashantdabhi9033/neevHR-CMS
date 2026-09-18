# NeevHR marketing site: deploy to a Hostinger VPS

Domain: **neevhr.com** (canonical: https://www.neevhr.com)
Server: Hostinger VPS (KVM 2), Ubuntu 24.04 LTS, plain OS (no control panel).
Stack: Next.js + Payload CMS + Postgres, run with PM2 behind Nginx with free SSL.

Do the steps in order. Commands run on the server as `root` (or with `sudo`).

---

## Step 1. Buy the VPS (Hostinger)

1. https://www.hostinger.in/vps-hosting -> KVM 2 -> 12 months.
2. Uncheck Daily auto-backup (not needed; weekly backup is free).
3. Server location: India.
4. After purchase, in the setup wizard choose OS: Ubuntu 24.04 LTS (plain OS, no panel).
5. Set the root password. Note the server IP address.

## Step 2. Point the domain (BigRock)

Log in to BigRock -> Manage the domain -> DNS / Nameservers -> Manage DNS records. Use BigRock's own DNS (not parking), and set:

| Type | Host / Name | Value | TTL |
| --- | --- | --- | --- |
| A | @ | YOUR_SERVER_IP | default |
| A | www | YOUR_SERVER_IP | default |

Delete any existing parking A record. DNS can take from a few minutes up to a few hours to propagate. Do this early so it is ready when you reach SSL.

## Step 3. First login and basic hardening

From your computer:

```bash
ssh root@YOUR_SERVER_IP
```

Then on the server:

```bash
apt update && apt upgrade -y
# 2 GB swap as a safety net for the build
fallocate -l 2G /swapfile && chmod 600 /swapfile && mkswap /swapfile && swapon /swapfile
echo '/swapfile none swap sw 0 0' >> /etc/fstab
# firewall
apt install -y ufw
ufw allow OpenSSH
ufw --force enable
```

## Step 4. Install Node, pnpm, Postgres, Nginx, git

```bash
# Node 24
curl -fsSL https://deb.nodesource.com/setup_24.x | bash -
apt install -y nodejs git nginx postgresql
# pnpm via corepack
corepack enable
corepack prepare pnpm@11.2.2 --activate
node -v && pnpm -v
```

## Step 5. Create the Postgres database

```bash
sudo -u postgres psql <<'SQL'
CREATE DATABASE neevhr_cms;
CREATE USER neevhr WITH PASSWORD 'CHOOSE_A_STRONG_PASSWORD';
GRANT ALL PRIVILEGES ON DATABASE neevhr_cms TO neevhr;
\c neevhr_cms
GRANT ALL ON SCHEMA public TO neevhr;
SQL
```

Keep the password; it goes into `DATABASE_URI` next.

## Step 6. Get the code

The repo is private, so clone with a GitHub token (create a fine-grained Personal Access Token with read access to the repo at github.com/settings/tokens), or make the repo public and clone without a token.

```bash
mkdir -p /var/www && cd /var/www
git clone https://YOUR_GITHUB_TOKEN@github.com/prashantdabhi9033/neevHR-CMS.git neevhr
cd neevhr
```

## Step 7. Configure the environment

```bash
cat > /var/www/neevhr/.env <<ENV
DATABASE_URI="postgresql://neevhr:CHOOSE_A_STRONG_PASSWORD@localhost:5432/neevhr_cms"
PAYLOAD_SECRET="$(openssl rand -hex 32)"
NEXT_PUBLIC_SERVER_URL="https://www.neevhr.com"
NEXT_PUBLIC_GA_ID=""
NODE_ENV="production"
ENV
```

Note: `NEXT_PUBLIC_SERVER_URL` is baked in at build time, so it must be set before you build. Add the GA id later when you have it, then rebuild.

## Step 8. Install, migrate and build

```bash
cd /var/www/neevhr
pnpm install --frozen-lockfile
set -a; . ./.env; set +a
pnpm payload migrate   # creates the database tables
pnpm build
```

`pnpm payload migrate` runs the generated migrations in `migrations/` and creates all the tables, so the build can read the database. Migrations are idempotent, so re-running them is safe.

## Step 9. Run it with PM2

```bash
npm install -g pm2
cd /var/www/neevhr
pm2 start pnpm --name neevhr -- start
pm2 save
pm2 startup    # run the command it prints, to start on reboot
```

The app now listens on port 3000 locally. Check: `curl -I http://127.0.0.1:3000`.

## Step 10. Nginx reverse proxy

```bash
cat > /etc/nginx/sites-available/neevhr <<'NGINX'
server {
    listen 80;
    server_name neevhr.com www.neevhr.com;
    client_max_body_size 20M;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
NGINX
ln -s /etc/nginx/sites-available/neevhr /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx
ufw allow 'Nginx Full'
```

Now http://neevhr.com should load (once DNS has propagated).

## Step 11. Free SSL (HTTPS)

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d neevhr.com -d www.neevhr.com --redirect -m you@example.com --agree-tos --no-eff-email
```

Certbot installs the certificate, redirects HTTP to HTTPS, and auto-renews. Visit https://www.neevhr.com.

## Step 12. Create the admin and seed the blog

1. Open https://www.neevhr.com/admin and create the first user (your email and a password). This is your CMS login.
2. Seed the 19 starter blog posts once:

```bash
# temporarily add a seed key, restart, seed, then remove it
cd /var/www/neevhr
echo 'SEED_KEY="pick-a-random-string"' >> .env
pm2 restart neevhr
curl "https://www.neevhr.com/api/dev-seed?key=pick-a-random-string"
# remove the key afterwards
sed -i '/^SEED_KEY=/d' .env
pm2 restart neevhr
```

You are live.

---

## Future updates (after a code change)

Whenever the code changes and you have pushed to GitHub, redeploy with the included script:

```bash
cd /var/www/neevhr && bash deploy.sh
```

It pulls, installs, builds and restarts. Note:

- Blog posts and leads are managed in `/admin` and do NOT need a redeploy.
- Uploaded images persist on the server disk under `public/media` and are not touched by updates.
- Only code or design changes need this redeploy.

## Adding the GA4 analytics id later

Edit `.env`, set `NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"`, then `bash deploy.sh` (it must be rebuilt because it is a build-time value).

## Troubleshooting

- App not responding: `pm2 logs neevhr` and `pm2 restart neevhr`.
- 502 from Nginx: the app is down or on the wrong port; check `curl -I http://127.0.0.1:3000`.
- Build runs out of memory: the 2 GB swap from Step 3 should prevent this; confirm with `free -h`.
- Database errors: check `DATABASE_URI` in `.env` and that Postgres is running (`systemctl status postgresql`).
- Certbot fails: DNS is not pointing to the server yet; wait for propagation and retry.
