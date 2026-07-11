# Tetris Tech website

Plain HTML, CSS, and a little JavaScript. No build tools, no frameworks, no monthly fees. You own every line of this and it runs on your own Hetzner server behind Apache.

## What's in here

```
index.html          the whole site, one page
css/style.css        all styling
js/main.js           footer year + contact form
.github/workflows/deploy.yml   auto deploy on push to main
```

Open `index.html` in a browser directly if you want to preview it with zero setup.

## Editing content

Everything is in `index.html`. Text, section order, and links live right in the markup, nothing is generated. Colors, fonts, and spacing live in `css/style.css` under the `:root` block at the top, change a value there and it updates everywhere it's used.

## Deploying to your Hetzner server

You have two options. Pick whichever fits how much you want to automate.

### Option A: manual upload (fastest to get started)

From your machine, with the site folder as your working directory:

```bash
rsync -avzr --delete ./ user@your-server-ip:/var/www/tetristech.com/
```

Swap in your actual SSH user, server IP, and the folder Apache serves from. That's it, refresh the site.

### Option B: automatic deploy on every push (recommended once you're set up)

This repo includes a GitHub Actions workflow that rsyncs the site to your server every time you push to `main`. Set it up once:

**1. Create a dedicated SSH key for deployment**

Run this on your own machine, not the server:

```bash
ssh-keygen -t ed25519 -C "deploy@tetristech" -f ./deploy_key -N ""
```

This makes two files: `deploy_key` (private) and `deploy_key.pub` (public).

**2. Add the public key to your server**

```bash
ssh-copy-id -i ./deploy_key.pub user@your-server-ip
```

Or manually append the contents of `deploy_key.pub` to `~/.ssh/authorized_keys` for the deploy user on the server.

**3. Add secrets to your GitHub repo**

In the repo, go to Settings, then Secrets and variables, then Actions. Add these:

| Secret name | Value |
|---|---|
| `DEPLOY_HOST` | your server's IP or hostname |
| `DEPLOY_USER` | the SSH user (don't use root, see below) |
| `DEPLOY_SSH_KEY` | the full contents of `deploy_key`, the private key |
| `DEPLOY_PORT` | usually `22` |
| `DEPLOY_PATH` | the folder Apache serves, e.g. `/var/www/tetristech.com/` |

**4. Push to main**

That's it. Every push runs the workflow and syncs the site.

## Setting up the server side (one time)

If Apache isn't already pointed at a folder for this site:

```bash
sudo mkdir -p /var/www/tetristech.com
sudo chown $USER:$USER /var/www/tetristech.com
```

Create `/etc/apache2/sites-available/tetristech.com.conf`:

```apache
<VirtualHost *:80>
    ServerName tetristech.com
    ServerAlias www.tetristech.com
    DocumentRoot /var/www/tetristech.com

    <Directory /var/www/tetristech.com>
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/tetristech_error.log
    CustomLog ${APACHE_LOG_DIR}/tetristech_access.log combined
</VirtualHost>
```

Then enable it and reload:

```bash
sudo a2ensite tetristech.com.conf
sudo systemctl reload apache2
```

### Free HTTPS with Let's Encrypt

Certbot is free and handles renewal automatically:

```bash
sudo apt install certbot python3-certbot-apache
sudo certbot --apache -d tetristech.com -d www.tetristech.com
```

## A note on the deploy user

Don't use `root` for the `DEPLOY_USER` secret. Create a separate user with write access only to the site folder:

```bash
sudo adduser deploy
sudo chown deploy:deploy /var/www/tetristech.com -R
```

Then use `deploy` as the SSH user everywhere above, and only give it the key from step 1, not a password login.

## Updating the "Based in" line and contact email

Search `index.html` for `Update with your location` and swap in your city. The contact form currently opens the visitor's email client addressed to `hello@tetristech.com`, update that address in both `index.html` and `js/main.js` if you're using something else.
