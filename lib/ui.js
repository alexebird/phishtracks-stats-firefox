var _ =      require("./underscore");
var _s =     require("./underscore.string");
var data =   require("sdk/self").data;
var Panel =  require("sdk/panel").Panel;
var Widget = require("sdk/widget").Widget;
var timers = require("sdk/timers");
var tabs =   require("sdk/tabs");
var api =    require("./api").API;

var UI = {};

UI.panels = {};
UI.panels.signIn = {
    width: 550,
    height: 340,
    contentURL: data.url("sign-in.html")
};

UI.panels.stats = {
    width: 900,
    height: 610,
    contentURL: data.url("stats.html")
};

UI.authedIcon = data.url("assets/ico/icon-donut32x32.png");
UI.unauthedIcon = data.url("assets/ico/icon-donutdark32x32.png");

UI.widget = Widget({
    id: "phish-tracks-stats",
    label: "PhishTracks.com Stats",
    contentURL: UI.unauthedIcon,
    panel: Panel({ contentScriptFile: [data.url("js/jquery-1.9.1.min.js"),
                                       data.url("js/bootstrap.min.js"),
                                       data.url("js/retina.js"),
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
            console.log("UI: user stats unavailable (\"" + response.message + "\")");
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
            console.log("UI: overall stats unavailable (\"" + response.message + "\")");
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
            console.log("UI: user history unavailable (\"" + response.message + "\")");
        }
    });
};

UI.updateAll = function() {
    // TODO use async.js parellel call here
    UI.updateOverallStats();
    UI.updateUserStats();
    UI.updateUserHistory();
};


/*
 * Timer
 *
 * It's a high-level absraction of Javascript timers.
 */

function Timer(name, timerType, ms, callback) {
    if (!_.isString(name))
        throw "timer name must be defined";

    if (!_.isFunction(callback))
        throw "timer callback must be defined";

    this.name = name;
    this.setTimerType(timerType);
    this.setMs(ms);
    this.callback = callback;
    this.running = false;
}

Timer.prototype.setTimerType = function(timerType) {
    if (!(timerType === "interval" || timerType === "timeout")) {
        throw "timerType must be 'interval' or 'timeout'";
    }

    this.timerType = timerType;
};

Timer.prototype.setMs = function(ms) {
    if (!(_.isNumber(ms) && ms >= 0)) {
        throw "ms must be 0 or greater";
    }

    this.ms = ms;
};

/* /Timer */


/*
 * TimerManager
 *
 * Manages timers.
 */

function TimerManager() {
    this.timers = {};         // Maps name: Timer
    this.runningTimers = {};  // Maps name: timerid
}

TimerManager.prototype.createTimer = function(name, timerType, ms, callback) {
    this.timers[name] = new Timer(name, timerType, ms, callback);
};

TimerManager.prototype.startTimer = function(name, newMs, newTimerType) {
    if (_.has(this.timers, name)) {
        var timer = this.timers[name];

        if (timer.running === true)
            return;

        if (!_.isUndefined(newMs))
            timer.setMs(newMs);

        if (!_.isUndefined(newTimerType))
            timer.setTimerType(newTimerType);

        if (timer.timerType === "interval") {
            var timerId = timers.setInterval(timer.callback, timer.ms);
            this.runningTimers[timer.name] = timerId;
            timer.running = true;
            console.log(_s.sprintf("TM: startTimer interval <id=%d, name=%s, ms=%d>", timerId, timer.name, timer.ms));
        }
        else if (timer.timerType === "timeout") {
            var timerId = timers.setTimeout(timer.callback, timer.ms);
            this.runningTimers[timer.name] = timerId;
            timer.running = true;
            console.log(_s.sprintf("TM: startTimer timeout <id=%d, name=%s, ms=%d>", timerId, timer.name, timer.ms));
        }
    }
};

TimerManager.prototype.stopTimer = function(name) {
    if (_.has(this.runningTimers, name)) {
        var timerId = this.runningTimers[name];
        var timer = this.timers[name];
        delete this.runningTimers[name];

        if (timer.timerType === "interval") {
            timers.clearInterval(timerId);
            timer.running = false;
            console.log(_s.sprintf("TM: stopTimer interval <id=%d, name=%s, ms=%d>", timerId, timer.name, timer.ms));
        }
        else if (timer.timerType === "timeout") {
            timers.clearTimeout(timerId);
            timer.running = false;
            console.log(_s.sprintf("TM: stopTimer timeout <id=%d, name=%s, ms=%d>", timerId, timer.name, timer.ms));
        }
    }
};

/* /TimerManager */


UI.showStatsAlert = function(message) {
    UI.widget.panel.port.emit("show_stats_alert", message);
};

UI.hideStatsAlert = function() {
    UI.widget.panel.port.emit("hide_stats_alert");
};


/*
 * ConnectivityManager
 *
 * CM is used by the UI to manage changes related to changes in connectivity. For instance,
 * if the PTS api is unreachable then the UI should show a message.
 *
 * TODO this could also be used to manage auth state by being made more general, like "StateManager" and non-singleton.
 */
var ConnectivityManager = {};
ConnectivityManager.init = function(opts) {
    this.connected = true;
    this.callbacks = { connectivityMade: opts['connectivityMadeCallback'],
                       connectivityLost: opts['connectivityLostCallback']};
};

ConnectivityManager.callCallback = function(name, parameter) {
    if (!_.isUndefined(this.callbacks[name])) {
        this.callbacks[name].call(undefined, parameter);
    }
};

ConnectivityManager.hasConnectivity = function() {
    return this.connected === true;
};

ConnectivityManager.hasUnknownConnectivity = function() {
    return _.isNull(this.connected);
};

ConnectivityManager.connectivityLost = function(data) {
    console.log("CM: connectivityLost");
    if (this.hasConnectivity() || this.hasUnknownConnectivity()) {
        this.connected = false;
        this.callCallback('connectivityLost', data);
    }
};

ConnectivityManager.connectivityMade = function(data) {
    console.log("CM: connectivityMade");
    if (!this.hasConnectivity()) {
        this.connected = true;
        this.callCallback('connectivityMade', data);
    }
};

/* /ConnectivityManager */


UI.signOut = function() {
    api.clearAuth();
    UI.setUnAuthedState();
    UI.timerManager.stopTimer("overall_stats");
    UI.timerManager.stopTimer("ping_for_connectivity");
};

UI.init = function() {
    this.timerManager = new TimerManager();

    UI.timerManager.createTimer("overall_stats", "interval", 10000, function() {
        console.log("UI: overall stats timer fired");
        UI.updateOverallStats();
    });

    UI.timerManager.createTimer("ping_for_connectivity", "interval", 1000, function() {
        console.log("UI: ping timer fired");
        api.ping();
    });

    ConnectivityManager.init({
        connectivityLostCallback: function(data){
            console.log("connectivityLostCallback");
            UI.showStatsAlert(data);
            UI.timerManager.stopTimer("overall_stats");
            // TODO test this new functionality, make sure the timer is stopped and what not and then add a try-to-reconnect timer
            UI.timerManager.startTimer("ping_for_connectivity");
        },
        connectivityMadeCallback: function() {
            console.log("connectivityMadeCallback");
            UI.timerManager.stopTimer("ping_for_connectivity");
            UI.hideStatsAlert();
            UI.updateAll();
            UI.timerManager.startTimer("overall_stats");
        }
    });

    api.unauthorizedCallback = function(response) {
        UI.signOut();
    };

    api.unreachableCallback = function(response) {
        ConnectivityManager.connectivityLost(response.message);
    };

    api.successfulResponseCallback = function(response) {
        ConnectivityManager.connectivityMade();
    };

    if (api.hasAuth()) {
        console.log("UI: user IS signed in");
        UI.setAuthedState();
        UI.hideStatsAlert();
        UI.updateAll();
        UI.timerManager.startTimer("overall_stats");
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
            UI.timerManager.startTimer("overall_stats");

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
    if (url.indexOf("{pts}/") === 0) {
        url = api.ptsUrl + url.replace("{pts}/", "");
    }

    tabs.open(url);
});


exports.UI = UI;
