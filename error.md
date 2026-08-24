emoving package drupal/tablefield so that it can be re-installed and re-patched.
  - Removing drupal/tablefield (3.0.0)
Deleting /home/digitalscc/public_html/ssaspb/web/modules/contrib/date_recur_modular - deleted
Deleting /home/digitalscc/public_html/ssaspb/web/modules/contrib/facets - deleted
Deleting /home/digitalscc/public_html/ssaspb/web/modules/contrib/preview_link - deleted
Deleting /home/digitalscc/public_html/ssaspb/web/modules/contrib/redirect - deleted
Deleting /home/digitalscc/public_html/ssaspb/web/modules/contrib/tablefield - deleted
Deleting /home/digitalscc/public_html/ssaspb/web/modules/contrib/pathauto - deleted
Deleting /home/digitalscc/public_html/ssaspb/web/modules/contrib/geolocation - deleted
Deleting /home/digitalscc/public_html/ssaspb/web/core - deleted
Loading composer repositories with package information
Updating dependencies
Your requirements could not be resolved to an installable set of packages.

  Problem 1
    - drupal/core-dev is locked to version 11.4.5 and an update of this package was not requested.
    - doctrine/instantiator 2.1.0 requires php ^8.4 -> your php version (8.3.33) does not satisfy that requirement.
    - drupal/core-dev 11.4.5 requires phpspec/prophecy ^1.23 -> satisfiable by phpspec/prophecy[v1.26.1].
    - phpspec/prophecy v1.26.1 requires doctrine/instantiator ^1.2 || ^2.0 -> satisfiable by doctrine/instantiator[2.1.0].

Running update with --no-dev does not mean require-dev is ignored, it just means the packages will not be installed. If dev requirements are blocking the update you have to resolve those problems.

Update to apply merge settings failed, reverting ./composer.lock to its original content.

In ScaffoldFilePath.php line 135:

  Scaffold file assets/scaffold/files/htaccess not found in package drupal/core.


install [--prefer-source] [--prefer-dist] [--prefer-install PREFER-INSTALL] [--dry-run] [--download-only] [--dev] [--no-suggest] [--no-dev] [--no-security-blocking] [--no-blocking] [--no-autoloader] [--no-progress] [--no-install] [--audit] [--audit-format AUDIT-FORMAT] [-v|vv|vvv|--verbose] [-o|--optimize-autoloader] [-a|--classmap-authoritative] [--strict-psr-autoloader] [--apcu-autoloader] [--apcu-autoloader-prefix APCU-AUTOLOADER-PREFIX] [--ignore-platform-req IGNORE-PLATFORM-REQ] [--ignore-platform-reqs] [--] [<packages>...]
