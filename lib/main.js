var data = require("sdk/self").data;
var PageMod = require("sdk/page-mod").PageMod;
var ss = require("sdk/simple-storage");
// var tabs = require("sdk/tabs");
var Panel = require("sdk/panel").Panel;
var Widget = require("sdk/widget").Widget;
var timers = require("sdk/timers");
var PtsAPI = require("./pts-api").PtsAPI;


// Setup Storage

var Storage = {
	storage: ss.storage,

	init: function() {
		if (!this.storage.authToken)
			this.storage.authToken = null;
		if (!this.storage.username)
			this.storage.username = null;
		if (!this.storage.userId)
			this.storage.userId = null;
	},

	isUserSignedIn: function() {
		return this.storage.authToken != null;
	},

	storeSession: function(userId, username, authToken) {
		// console.log("storing session <" + username + ", " + (authToken == null ? "null" : "[AUTH_TOKEN]") + ">");
		Storage.storage.userId = userId;
		Storage.storage.username = username;
		Storage.storage.authToken = authToken;
		console.log("storing session <" + this.storage.userId + ", " + this.storage.username + ", " + this.storage.authToken + ">");
	},

	debug: function() {
		console.log("stored session <" + this.storage.username + ", " + this.storage.authToken + ">");
	},

	invalidateLocalSession: function() {
		Storage.storeSession(null, null, null);
	}
};
Storage.init();


// Setup UI

var UI = {};

UI.panel = Panel({
  width: 400,
  height: 300,
  contentScriptFile: [data.url('jquery-1.9.1.min.js'), data.url("panel.js")],
  contentURL: data.url("sign_in.html")
});

UI.authedIcon = data.url("favicon.ico");
UI.unauthedIcon = data.url("favicon-bw.ico");
UI.widget = Widget({
  id: "phish-tracks-stats",
  label: "PhishTracks.com Stats",
  contentURL: UI.unauthedIcon,
  panel: UI.panel
});

UI.signIn = function() {
	UI.panel.contentURL = data.url("stats.html");
	UI.widget.contentURL = UI.authedIcon;
}

UI.signOut = function() {
	UI.panel.hide();
	UI.widget.contentURL = UI.unauthedIcon;
	UI.panel.contentURL = data.url("sign_in.html");
	// UI.panel.show();
}

UI.panel.port.on("submit", function(userLogin) {
	PtsAPI.createSession(userLogin, function(response) {
		UI.panel.port.emit("sign-in-response", response);

		if (response.success) {
			Storage.storeSession(response.json.user_id, response.json.username, response.json.auth_token);
			PtsAPI.init(Storage.storage.userId, Storage.storage.username, Storage.storage.authToken);
			timers.setTimeout(function() {
				UI.signIn();
				UI.panel.hide();
			}, 2000);
		}
	});
});

UI.panel.port.on("refresh-stats", function() {
	PtsAPI.getOverallStats(function(response) {
		response.overall = true;
		UI.panel.port.emit("refresh-stats-response", response);
	});

	PtsAPI.getUserStats(function(response) {
		response.user = true;
		UI.panel.port.emit("refresh-stats-response", response);
	});
});

UI.panel.port.on("sign-out", function() {
	Storage.invalidateLocalSession();
	UI.signOut();
	PtsAPI.destroySession(function(response) {});
});


// Setup page-mod

PageMod({
	include: "*.phishtracks.com",
	contentScriptFile: [data.url('jquery-1.9.1.min.js'),
						data.url('phishtracks-stats.js')],
	onAttach: function(worker) {
		// Storage.invalidateLocalSession();  // TODO: remove for production app
		Storage.debug();

		if (Storage.isUserSignedIn()) {
			PtsAPI.init(Storage.storage.userId, Storage.storage.username, Storage.storage.authToken);
			console.log("user IS signed in");
			// PtsAPI.reAuthSession(function(response) { // TODO reauth using token when addon starts

			// 	if (response.success) {
			// 		Storage.storeSession(response.json.username, response.json.auth_token);
			// 		uiSignIn();
			// 		timers.setTimeout(uiPanel.hide, 2000);
			// 	}
			// 	else {
			// 		uiSignOut();
			// 		uiPanel.show();
			// 	}
			// });

			UI.signIn();
		}
		else {
			console.log("user is NOT signed in");
			UI.signOut();
			UI.panel.show();
		}


		// handle track finished event

		worker.port.on("track-finished", function(playedTrackData) {
			console.log("track is finished.");
			var requestContent = { played_track: {
								       played_track_id: playedTrackData.playedTrack.id,
									   show: playedTrackData.show }};
			// console.log(JSON.stringify(requestContent));
			console.log("id: " + requestContent.played_track.played_track_id);
			PtsAPI.createPlayedTrack(requestContent, function(response) {
				console.log('response: ' + JSON.stringify(response));
			});
		});
	}
});
