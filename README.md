PhishTracks Stats
=================

A Firefox Add-on that keeps track of your PhishTracks.com listening stats.

Some useful development commands:

cfx run --profiledir=fxprofile --binary-args '-url "http://phishtracks.com/"'
cfx run --profiledir=fxprofile --binary-args '-url "http://phishtracks.com/shows/1994-06-17/simple--3"'
cfx run --profiledir=fxprofile --binary-args '-url "http://phishtracks.com/"' --static-args="{ \"logLevel\": \"debug\", \"ptsHost\": \"http://localhost:5000/\" }"

cfx xpi --static-args="{ \"logLevel\": \"debug\", \"ptsHost\": \"http://staging.phishtrackstats.com/\" }"
cfx xpi --static-args="{ \"logLevel\": \"warn\", \"ptsHost\": \"http://www.phishtrackstats.com/\" }"

On JS/extension testing:
http://stackoverflow.com/questions/14798528/testing-browser-extensions/17370531#17370531


Publishing a new version
------------------------
Run:
  cfx xpi --static-args="{ \"logLevel\": \"warn\", \"ptsHost\": \"http://www.phishtrackstats.com/\" }" --update-link=https://s3.amazonaws.com/phishtrackstats/firefox/phishtracks-stats_latest.xpi --update-url=https://s3.amazonaws.com/phishtrackstats/firefox/update.rdf

Move the generated .xpi and .rdf to the appropriate dir, outside the addon itself.

Change the max version in the .rdf to 22.* or whatever it should be.

Rename the .xpi to phishtracks-stats_latest.xpi
Rename the .rdf to update.rdf

Put the .xpi and .rdf on S3 and grand Everyone permissions to open/download.
