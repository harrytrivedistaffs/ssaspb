# SSASPB

The Staffordshire and Stoke-on-Trent Adult Safeguarding Partnership Board
website, built on [LocalGov Drupal](https://localgovdrupal.org/).

## Local development

```
composer install
drush site-install localgov
```

The custom theme's CSS is Tailwind-authored but compiled and committed —
`css-src/` is the source, `css/` is what the site actually loads, so a
cPanel deploy never needs Node.js. If you change theme CSS locally:

```
cd web/themes/custom/ssaspb
npm install
npm run build
```

## Deploying to cPanel

1. Push this repo to your server (git pull, or upload the working tree).
2. Create a MySQL database and user in cPanel (**MySQL Databases**), then
   import `Deploy-Artifacts/ssaspb-db.sql.gz` into it via **phpMyAdmin**
   (Import tab — it decompresses `.gz` automatically).
3. Run `composer install` once (via `deploy.sh`, see below, or manually) —
   this also scaffolds a fresh `web/sites/default/settings.php` from
   Drupal core's default template, since that file is gitignored (it holds
   credentials). Edit the `$databases['default']['default']` block in it
   with the database name/username/password from step 2, and set
   `$settings['trusted_host_patterns']` to your real domain.
4. Run `bash deploy.sh`. It installs Drupal core, contrib modules and
   libraries via composer (none of that is committed to this repo — see
   `.gitignore`), seeds `web/sites/default/files` from
   `Deploy-Artifacts/ssaspb-files.zip` on the very first run only, then
   runs `drush deploy` (config import + database updates + cache rebuild).

Re-running `deploy.sh` after a later `git pull` is safe — the files seed
step only ever runs once (guarded by a `.seeded` marker), so it won't
clobber anything uploaded on the live site since.

**Admin login:** username `admin` — see your own records for the password,
or reset it directly on the server with `drush upwd admin "new-password"`.
Change it after first login if you haven't already.

## What's still placeholder content

Body/summary text ("Summary 1. Replace this with...") and the diagonal
purple-stripe "PLACEHOLDER — replace this image" graphics are intentional
stand-ins — swap them for real copy and photography before this goes fully
live. Everything else on the frontend is driven by real fields/content, not
hardcoded markup, so replacing them is a content edit, not a code change.
