var data = require("sdk/self").data;
var PageMod = require("sdk/page-mod").PageMod;
var ss = require("sdk/simple-storage");
// var tabs = require("sdk/tabs");
var Panel = require("sdk/panel").Panel;
var Widget = require("sdk/widget").Widget;
var timers = require("sdk/timers");
var PtsApi = require("./pts-api").PtsApi;

var Storage = {
	storage: ss.storage,

	init: function() {
		if (!this.storage.authToken)
			this.storage.authToken = null;
	},

	isUserSignedIn: function() {
		return this.storage.authToken != null;
	},

	storeSession: function(username, authToken) {
		console.log("storing session <" + username + ", " + (authToken == null ? "null" : "[AUTH_TOKEN]") + ">");
		Storage.storage.username = username;
		Storage.storage.authToken = authToken;
	},

	invalidateSession: function() {
		Storage.storeSession(null, null);
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
	PtsApi.createSession(userLogin, function(response) {
		loginPanel.port.emit("response", response);

		if (response.success) {
			Storage.storeSession(response.json.username, response.json.auth_token);
			timers.setTimeout(loginPanel.hide, 2000);
		}
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
		Storage.invalidateSession();  // TODO: remove

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
			PtsApi.createPlayedTrack(requestContent, function(response) {
				console.log('response: ' + JSON.stringify(response));
			});
		});
	}
});
