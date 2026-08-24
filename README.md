
  - Skip [web-root]/sites/default/settings.php because it already exists and overwrite is false.

==> drush deploy (config import + database updates + cache rebuild)
 [notice] Database updates start.
>  [success] No pending updates.

In SiteProcess.php line 214:

  The command "/home/digitalscc/public_html/ssaspb/vendor/bin/drush updatedb --yes --uri=default" failed.

  Exit Code: 255(Unknown error)

  Working directory:

  Output:
  ================


  Error Output:
  ================
   [success] No pending updates.
