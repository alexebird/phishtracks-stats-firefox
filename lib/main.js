var data = require("sdk/self").data;
var PageMod = require("sdk/page-mod").PageMod;
var ss = require("sdk/simple-storage");
// var addonpage = require("sdk/addon-page");
// var tabs = require("sdk/tabs");
var Panel = require("sdk/panel").Panel;
var Widget = require("sdk/widget").Widget;
var PTS = require("./pts-api").PTS;

var Storage = {
	storage: ss.storage,

	init: function() {
		if (!this.storage.authToken)
			this.storage.authToken = null;
	},

	isUserSignedIn: function() {
		return this.storage.authToken != null;
	}
};
Storage.init();

var loginPanel = Panel({
  width: 400,
  height: 300,
  contentScriptFile: [data.url('jquery-1.9.1.min.js'), data.url("login-panel.js")],
  contentURL: data.url("sign_in.html")
});

loginPanel.port.on("submit", function(userLogin) {
	PTS.createSession(userLogin, function(response) {
		console.log('response: ' + JSON.stringify(response.json));
	});
});

var widget = Widget({
  id: "phish-tracks-stats",
  label: "PhishTracks.com Stats",
  contentURL: data.url("favicon.ico"),
  panel: loginPanel
});

PageMod({
	include: "*.phishtracks.com",
	contentScriptFile: [data.url('jquery-1.9.1.min.js'),
						data.url('phishtracks-stats.js')],
	onAttach: function(worker) {
		if (!Storage.isUserSignedIn()) {
			loginPanel.show();
		}

		worker.port.on("trackFinished", function(playedTrackData) {
			console.log("track is finished.");
			var requestContent = { played_track: {
								       played_track_id: playedTrackData.playedTrack.id,
									   show: playedTrackData.show }};
			// console.log(JSON.stringify(requestContent));
			console.log("id: " + requestContent.played_track.played_track_id);
			PTS.createPlayedTrack(requestContent, function(response) {
				console.log('response: ' + JSON.stringify(response));
			});
		});
	}
});
