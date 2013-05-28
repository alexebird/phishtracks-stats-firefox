var data = require("sdk/self").data;
var Panel = require("sdk/panel").Panel;
var Widget = require("sdk/widget").Widget;
var timers = require("sdk/timers");
var api = require("./pts-api").pts.API;
var Storage = require("./storage").Storage;

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

UI.panel.port.on("submit_login", function(userLogin) {
	api.createSession(userLogin, function(response) {
		UI.panel.port.emit("sign_in_response", response);

		if (response.success) {
			Storage.storeSession(response.json.user_id, response.json.username, response.json.auth_token);
			api.setAuth(Storage.storage.userId, Storage.storage.username, Storage.storage.authToken);
			timers.setTimeout(function() {
				UI.signIn();
				UI.panel.hide();
			}, 2000);
		}
	});
});

function getUserStats() {
	api.getUserStats(function(response) {
		if (response.success) {
			UI.panel.port.emit("user_stats_update", response.json.stats);
		}
		else {
			console.log("user stats unavailable");
		}
	});
}

function getOverallStats() {
	api.getOverallStats(function(response) {
		if (response.success) {
			UI.panel.port.emit("overall_stats_update", response.json.stats);
		}
		else {
			console.log("user stats unavailable");
		}
	});
}

UI.panel.port.on("manual_stats_refresh", function() {
	getOverallStats();
	getUserStats();
});

UI.panel.port.on("update_overall_stats_timer", getOverallStats);
UI.panel.port.on("played_track_created", getUserStats);

UI.panel.port.on("sign_out", function() {
	Storage.invalidateLocalSession();
	UI.signOut();
	api.destroySession(function(response) {});
});

exports.UI = UI;
