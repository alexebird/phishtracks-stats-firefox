var data = require("sdk/self").data;
var Panel = require("sdk/panel").Panel;
var Widget = require("sdk/widget").Widget;
var timers = require("sdk/timers");
var tabs = require("sdk/tabs");
var api = require("./api").API;

var UI = {};

UI.panels = {};
UI.panels.signIn = {
	width: 550,
	height: 385,
	// contentScriptFile: [data.url("divshot/js/jquery-1.9.1.min.js"),
	//					data.url("divshot/js/bootstrap.min.js"),
	//                     data.url("pts-common.js"),
	//					data.url("sign-in-panel.js")],
	contentURL: data.url("divshot/sign-in.html")
};

UI.panels.stats = {
	width: 900,
	height: 650,
	// contentScriptFile: [data.url("divshot/js/jquery-1.9.1.min.js"),
	//                     data.url("divshot/js/bootstrap.min.js"),
	//                     data.url("pts-common.js"),
	//                     data.url("stats-panel.js")],
	contentURL: data.url("divshot/stats.html")
};

UI.authedIcon = data.url("favicon.ico");
UI.unauthedIcon = data.url("favicon-bw.ico");

UI.widget = Widget({
	id: "phish-tracks-stats",
	label: "PhishTracks.com Stats",
	contentURL: UI.unauthedIcon,
	panel: Panel({ contentScriptFile: [data.url("divshot/js/jquery-1.9.1.min.js"),
               data.url("divshot/js/bootstrap.min.js"),
                   data.url("pts-common.js"),
                   data.url("sign-in-panel.js")] })
});
UI.widget.setPanel = function(newPanel) {
	this.panel.hide();
	UI.widget.panel.resize(newPanel.width, newPanel.height);
	UI.widget.panel.contentURL = newPanel.contentURL;
	// UI.widget.panel.contentScriptFile = newPanel.contentScriptFile;
};

UI.setAuthedState = function() {
	console.log("UI: setAuthedState");
	UI.widget.setPanel(UI.panels.stats);
	UI.widget.contentURL = UI.authedIcon;
};

UI.setUnAuthedState = function() {
	console.log("UI: setUnAuthedState");
	UI.widget.setPanel(UI.panels.signIn);
	UI.widget.contentURL = UI.unauthedIcon;
};

UI.updateUserStats = function() {
	console.log("UI: updateUserStats");
	api.getUserStats(function(response) {
		if (response.success) {
			UI.widget.panel.port.emit("user_stats_updated", response.json.user_stats);
		}
		else {
			console.log("UI: user stats unavailable (" + response.message + ")");
		}
	});
};

UI.updateOverallStats = function() {
	console.log("UI: updateOverallStats");
	api.getOverallStats(function(response) {
		if (response.success) {
			UI.widget.panel.port.emit("overall_stats_updated", response.json.overall_stats);
		}
		else {
			console.log("UI: overall stats unavailable (" + response.message + ")");
		}
	});
};

UI.updateUserHistory = function() {
	console.log("UI: updateUserHistory");
	api.getUserHistory(function(response) {
		if (response.success) {
			UI.widget.panel.port.emit("user_history_updated", response.json.user_history);
		}
		else {
			console.log("UI: user history unavailable (" + response.message + ")");
		}
	});
};

UI.updateAll = function() {
	// TODO use async.js parellel call here
	UI.updateOverallStats();
	UI.updateUserStats();
	UI.updateUserHistory();
};

UI.startOverallStatsTimer = function() {
	this.overallStatsUpdateTimerId = timers.setInterval(function() {
		console.log("UI: overall stats timer fired");
		UI.updateOverallStats();
	}, 60000);
	console.log("UI: startOverallStatsTimer <id=" + this.overallStatsUpdateTimerId + ">");
};

UI.stopOverallStatsTimer = function() {
	console.log("UI: stopOverallStatsTimer <id=" + this.overallStatsUpdateTimerId + ">");
	timers.clearInterval(this.overallStatsUpdateTimerId);
};

UI.signOut = function() {
	api.clearAuth();
	UI.setUnAuthedState();
	UI.stopOverallStatsTimer();
};

UI.init = function() {
	this.overallStatsUpdateTimerId = null;
	api.unauthorizedCallback = function(response) {
		UI.signOut();
	};

	if (api.hasAuth()) {
		console.log("UI: user IS signed in");
		UI.setAuthedState();
		UI.startOverallStatsTimer();
		UI.updateAll();
	}
	else {
		console.log("UI: user is NOT signed in");
		UI.setUnAuthedState();
	}
};


// Event listeners

UI.widget.panel.port.on("login_submitted", function(userLogin) {
	// console.log("UI: pre createSession");
	api.createSession(userLogin, function(response) {
		// console.log("UI: createSession callback");
		UI.widget.panel.port.emit("sign_in_response", response);
		// console.log("UI: post sign_in_response");

		if (response.success) {
			api.setAuth(response.json.user_id, response.json.username, response.json.auth_token);
			UI.widget.panel.hide();
			UI.widget.panel.port.emit("reset_login_form");
			UI.setAuthedState();
			UI.startOverallStatsTimer();

			// Using setTimeout gives the panel time to load, I'm thinking. Without the timer, port
			// communication with the panel's content script doesn't work.
			timers.setTimeout(function() {
				UI.updateAll();
				UI.widget.panel.show(); },
				200);
		}
	});
});

UI.widget.panel.port.on("manual_refresh", function() {
	UI.updateAll();
});

// UI.widget.panel.port.on("update_overall_stats_timer", function() {
// UI.updateOverallStats();
// });

UI.widget.panel.port.on("sign_out", function() {
	UI.signOut();
});

UI.widget.panel.port.on("open_tab_link_clicked", function(url) {
	tabs.open(url);
});


exports.UI = UI;
