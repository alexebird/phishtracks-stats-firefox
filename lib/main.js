var data = require("sdk/self").data;
var PageMod = require("sdk/page-mod").PageMod;
var timers = require("sdk/timers");
// var tabs = require("sdk/tabs");
var pts = {};
var api = require("./api").API;
var UI = require("./ui").UI;

api.printAuth();

UI.init();

PageMod({
	include: "*.phishtracks.com",
	contentScriptFile: [data.url('jquery-1.9.1.min.js'),
						data.url('pts.js')],

	onAttach: function(worker) {
		worker.port.on("track_finished", function(playedTrackId) {
			api.createPlayedTrack({ phishtracks_id: playedTrackId }, function(response) {
				if (response.success) {
					UI.updateUserStats();
				}
				else {
					console.log("could not create played track");
				}
			});
		});
	}
});
