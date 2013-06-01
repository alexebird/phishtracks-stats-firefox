var data = require("sdk/self").data;
var Panel = require("sdk/panel").Panel;
var Widget = require("sdk/widget").Widget;
var timers = require("sdk/timers");
var tabs = require("sdk/tabs");
var api = require("./api").API;

var UI = {};

// UI.panel = Panel({
// 	width: 800,
// 	height: 600,
// 	contentScriptFile: [data.url('jquery-1.9.1.min.js'), data.url("panel.js")],
// 	contentURL: data.url("sign_in.html")
// });

UI.panel = Panel({
	width: 990,
	height: 650,
	contentScriptFile: [data.url('divshot/js/jquery.min.js'), data.url("divshot/js/bootstrap.min.js"), data.url("panel.js")],
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

UI.setAuthedState = function() {
	UI.panel.hide();
	UI.panel.contentURL = data.url("divshot/stats-divshot.html");
	UI.widget.contentURL = UI.authedIcon;
	UI.panel.show();
}

UI.setUnAuthedState = function() {
	UI.panel.hide();
	UI.widget.contentURL = UI.unauthedIcon;
	UI.panel.contentURL = data.url("sign_in.html");
	// UI.panel.show();
}


UI.updateUserStats = function() {
	console.log("UI: updateUserStats");
	api.getUserStats(function(response) {
		if (response.success) {
			UI.panel.port.emit("user_stats_updated", response.json.user_stats);
		}
		else {
			console.log("UI: user stats unavailable (" + response.message + ")");
		}
	});
}

UI.updateOverallStats = function() {
	api.getOverallStats(function(response) {
		if (response.success) {
			UI.panel.port.emit("overall_stats_updated", response.json.overall_stats);
		}
		else {
			console.log("UI: overall stats unavailable (" + response.message + ")");
		}
	});
}

UI.startOverallStatsTimer = function() {
	this.overallStatsUpdateTimerId = timers.setInterval(function() {
		console.log("UI: overall stats timer fired");
		UI.updateOverallStats();
	}, 1000 * 60);
}

UI.stopOverallStatsTimer = function() {
	timers.clearInterval(this.overallStatsUpdateTimerId);
}

UI.init = function() {
	this.overallStatsUpdateTimerId = null;

	if (api.hasAuth()) {
		console.log("UI: user IS signed in");
		UI.setAuthedState();
		UI.updateOverallStats();
		UI.updateUserStats();
		UI.startOverallStatsTimer();
	}
	else {
		console.log("UI: user is NOT signed in");
		UI.setUnAuthedState();
		// UI.panel.show();
	}
};


// Event listeners

UI.panel.port.on("submit_login", function(userLogin) {
	api.createSession(userLogin, function(response) {
		UI.panel.port.emit("sign_in_response", response);

		if (response.success) {
			api.setAuth(response.json.user_id, response.json.username, response.json.auth_token);
			timers.setTimeout(function() {
				UI.setAuthedState();
				UI.startOverallStatsTimer();
				UI.panel.hide();
			}, 2000);
		}
	});
});

UI.panel.port.on("manual_stats_refresh", function() {
	UI.updateOverallStats();
	UI.updateUserStats();
});

UI.panel.port.on("update_overall_stats_timer", function() { UI.updateOverallStats() });

UI.panel.port.on("sign_out", function() {
	api.clearAuth();
	UI.setUnAuthedState();
	UI.stopOverallStatsTimer();
});

UI.panel.port.on("open_tab_link_clicked", function(url) {
	tabs.open(url);	
});


exports.UI = UI;
