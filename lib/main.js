var data = require("sdk/self").data;
var PageMod = require("sdk/page-mod").PageMod;
// var tabs = require("sdk/tabs");
var pts = {};
pts.API = require("./pts-api").pts.API;
var Storage = require("./storage").Storage;
var UI = require("./ui").UI;

Storage.init();

timer.setInterval(
	function() {
		UI.panel.port.emit("update_overall_stats_timer");
	},
	1000 * 60);

PageMod({
	include: "*.phishtracks.com",
	contentScriptFile: [data.url('jquery-1.9.1.min.js'),
						data.url('phishtracks-stats.js')],
	onAttach: function(worker) {
		// Storage.invalidateLocalSession();  // TODO: remove for production app
		Storage.debug();

		if (Storage.isUserSignedIn()) {
			pts.API.init(Storage.storage.userId, Storage.storage.username, Storage.storage.authToken);
			console.log("user IS signed in");
			UI.signIn();
		}
		else {
			console.log("user is NOT signed in");
			UI.signOut();
			UI.panel.show();
		}


		// handle track finished event

		worker.port.on("track_finished", function(playedTrackData) {
			console.log("track is finished.");
			var requestContent = { played_track: {
								       played_track_id: playedTrackData.playedTrack.id,
									   show: playedTrackData.show }};

			// console.log(JSON.stringify(requestContent));
			console.log("id: " + requestContent.played_track.played_track_id);

			pts.API.createPlayedTrack(requestContent, function(response) {
				console.log('response: ' + JSON.stringify(response));
				if (response.success) {
					UI.panel.emit("played_track_created");
				}
				else {
					console.log("could not create played track");
				}
			});
		});
	}
});
