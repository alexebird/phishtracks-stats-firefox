PhishTracks Stats
=================

A Firefox Add-on that keeps track of your PhishTracks.com listening stats.

Some useful development commands:
- cfx run --profiledir=../fxprofile --binary-args '-url "http://phishtracks.com/"'
- cfx run --profiledir=../fxprofile --binary-args '-url "http://phishtracks.com/shows/1994-06-17/simple--3"'
- cfx run --profiledir=../fxprofile --binary-args '-url "http://phishtracks.com/"' --static-args="{ \"logLevel\": \"debug\", \"ptsHost\": \"http://localhost:5000/\" }"
- cfx xpi --static-args="{ \"logLevel\": \"debug\", \"ptsHost\": \"http://staging.phishtrackstats.com/\" }"
- cfx xpi --static-args="{ \"logLevel\": \"warn\", \"ptsHost\": \"http://www.phishtrackstats.com/\" }"

On JS/extension testing:
http://stackoverflow.com/questions/14798528/testing-browser-extensions/17370531#17370531


Releasing a new version
------------------------
- Make sure the add-on SDK has been activated.
- Bump version in package.json
- From add-on root:

    ../release_firefox.sh .

- Set LATEST_XPI in deployment config (replacing <VERSION> with the version):

    heroku config:set LATEST_XPI=phishtracks-stats-<VERSION>.xpi --remote production

  Or edit the .env file.
- Set LATEST_XPI in the /etc/init/phishtracks-stats-www upstart jobs
