var data = require("sdk/self").data;
var PageMod = require("sdk/page-mod").PageMod;
var ss = require("sdk/simple-storage");
// var tabs = require("sdk/tabs");
var Panel = require("sdk/panel").Panel;
var Widget = require("sdk/widget").Widget;
var timers = require("sdk/timers");
var PtsApi = require("./pts-api").PtsApi;


// Setup Storage

var Storage = {
	storage: ss.storage,

	init: function() {
		if (!this.storage.authToken)
			this.storage.authToken = null;
		if (!this.storage.username)
			this.storage.username = null;
	},

	isUserSignedIn: function() {
		return this.storage.authToken != null;
	},

	storeSession: function(username, authToken) {
		// console.log("storing session <" + username + ", " + (authToken == null ? "null" : "[AUTH_TOKEN]") + ">");
		Storage.storage.username = username;
		Storage.storage.authToken = authToken;
		console.log("storing session <" + this.storage.username + ", " + this.storage.authToken + ">");
	},

	debug: function() {
		console.log("stored session <" + this.storage.username + ", " + this.storage.authToken + ">");
	},

	invalidateLocalSession: function() {
		Storage.storeSession(null, null);
	}
};
Storage.init();


// Setup UI

var uiPanel = Panel({
  width: 400,
  height: 300,
  contentScriptFile: [data.url('jquery-1.9.1.min.js'), data.url("panel.js")],
  contentURL: data.url("sign_in.html")
});

var authedIcon = data.url("favicon.ico");
var unauthedIcon = data.url("favicon-bw.ico");
var widget = Widget({
  id: "phish-tracks-stats",
  label: "PhishTracks.com Stats",
  contentURL: unauthedIcon,
  panel: uiPanel
});

function signIn() {
	uiPanel.contentURL = data.url("stats.html");
	widget.contentURL = authedIcon;
	PtsApi.authToken = Storage.storage.authToken;
	PtsApi.username = Storage.storeSession.authToken;
}

function signOut() {
	uiPanel.hide();
	Storage.invalidateLocalSession();
	widget.contentURL = unauthedIcon;
	uiPanel.contentURL = data.url("sign_in.html");
	uiPanel.show();
}

uiPanel.port.on("submit", function(userLogin) {
	PtsApi.createSession(userLogin, function(response) {
		uiPanel.port.emit("sign-in-response", response);

		if (response.success) {
			Storage.storeSession(response.json.username, response.json.auth_token);
			signIn();
			timers.setTimeout(uiPanel.hide, 2000);
		}
	});
});

uiPanel.port.on("refresh-stats", function() {
	PtsApi.getOverallStats(function(response) {
		console.log("refresh stats callback");
		uiPanel.port.emit("refresh-stats-response", response);
	});
});

uiPanel.port.on("sign-out", function() {
	signOut();
	// PtsApi.destroySession(function(response) {
	// 	// response.success ?
	// });
});


// Setup page-mod

PageMod({
	include: "*.phishtracks.com",
	contentScriptFile: [data.url('jquery-1.9.1.min.js'),
						data.url('phishtracks-stats.js')],
	onAttach: function(worker) {
		// Storage.invalidateLocalSession();  // TODO: remove for production app
		// signOut();
		Storage.debug();

		if (Storage.isUserSignedIn()) {
			PtsApi.init(Storage.storage.username, Storage.storage.authToken);
			console.log("user IS signed in");
			// PtsApi.reAuthSession(function(response) { // TODO reauth using token when addon starts

			// 	if (response.success) {
			// 		Storage.storeSession(response.json.username, response.json.auth_token);
			// 		signIn();
			// 		timers.setTimeout(uiPanel.hide, 2000);
			// 	}
			// 	else {
			// 		signOut();
			// 		uiPanel.show();
			// 	}
			// });

			signIn();
		}
		else {
			console.log("no user signed in");
			signOut();
			uiPanel.show();
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
