var data   = require("sdk/self").data;
var Panel  = require("sdk/panel").Panel;
var Widget = require("sdk/widget").Widget;
var timers = require("sdk/timers");
var tabs   = require("sdk/tabs");
var _      = require("./underscore");
var _s     = require("./underscore.string");
var api    = require("./api").API;
var ConnectivityManager = require("./connectivity-manager").ConnectivityManager;
var TimerManager = require("./timer-manager").TimerManager;

var UI = ({
    panels: {
        signIn: {
            width: 550,
            height: 340,
            contentURL: data.url("sign-in.html")
        },

        stats: {
            width: 900,
            height: 630,
            contentURL: data.url("stats.html")
        }
    },

    authedIcon: data.url("assets/ico/icon-donut32x32.png"),
    unauthedIcon: data.url("assets/ico/icon-donutdark32x32.png"),

    widget: null,
    timerManager: new TimerManager(),
    connMan: null,

    setAuthedState: function() {
        console.debug("UI: setAuthedState");
        this.widget.setPanel(this.panels.stats);
        this.widget.contentURL = this.authedIcon;
    },

    setUnAuthedState: function() {
        console.debug("UI: setUnAuthedState");
        this.widget.setPanel(this.panels.signIn);
        this.widget.contentURL = this.unauthedIcon;
    },

    updateUserStats: function() {
        console.debug("UI: updateUserStats");
        api.getUserStats(function(response) {
            if (response.success) {
                UI.widget.panel.port.emit("user_stats_updated", response.data.user.stats);
            }
            else {
                console.warn("UI: user stats unavailable (\"" + response.error + "\")");
            }
        });
    },

    updateOverallStats: function() {
        console.debug("UI: updateOverallStats");
        api.getOverallStats(function(response) {
            if (response.success) {
                UI.widget.panel.port.emit("overall_stats_updated", response.data.overall_stats);
            }
            else {
                console.warn("UI: overall stats unavailable (\"" + response.error + "\")");
            }
        });
    },

    updateUserHistory: function() {
        console.debug("UI: updateUserHistory");
        api.getUserHistory(function(response) {
            if (response.success) {
                UI.widget.panel.port.emit("user_history_updated", response.data.user_history);
            }
            else {
                console.warn("UI: user history unavailable (\"" + response.error + "\")");
            }
        });
    },

    updateAll: function() {
        // TODO use async.js parellel call here
        this.updateOverallStats();
        this.updateUserStats();
        this.updateUserHistory();
    },

    showStatsAlert: function(message) {
        this.widget.panel.port.emit("show_stats_alert", message);
    },

    hideStatsAlert: function() {
        this.widget.panel.port.emit("hide_stats_alert");
    },

    signOut: function() {
        api.clearAuth();
        this.setUnAuthedState();
        this.timerManager.stopTimer("overall_stats");
        this.timerManager.stopTimer("ping_for_connectivity");
    },

    init: function() {
        this.widget = Widget({
            id: "phishtracks-stats",
            label: "PhishTracks.com Stats",
            contentURL: this.unauthedIcon,
            panel: Panel({ contentScriptFile: [data.url("js/jquery-1.9.1.min.js"),
                                               data.url("js/bootstrap.min.js"),
                                               data.url("js/retina.js"),
                                               data.url("pts-common.js"),
                                               data.url("panels.js")] })
        });

        this.widget.setPanel = function(newPanel) {
            this.panel.hide();
            this.panel.resize(newPanel.width, newPanel.height);
            this.panel.contentURL = newPanel.contentURL;
            // this.widget.panel.contentScriptFile = newPanel.contentScriptFile;
        };

        this.timerManager.createTimer("overall_stats", "interval", 10000, function() {
            console.info("UI: overall stats timer fired");
            UI.updateOverallStats();
        });

        this.timerManager.createTimer("ping_for_connectivity", "interval", 10000, function() {
            console.info("UI: ping timer fired");
            api.ping();
        });

        this.connMan = new ConnectivityManager({
            connectivityLostCallback: function(response){
                console.debug("connectivityLostCallback");
                UI.showStatsAlert(response.data.error);
                UI.timerManager.stopTimer("overall_stats");
                // TODO test this new functionality, make sure the timer is stopped and what not and then add a try-to-reconnect timer
                UI.timerManager.startTimer("ping_for_connectivity");
            },
            connectivityMadeCallback: function() {
                console.debug("connectivityMadeCallback");
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
            UI.connMan.connectivityLost(response);
        };

        api.successfulResponseCallback = function(response) {
            UI.connMan.connectivityMade();
        };

        if (api.hasAuth()) {
            console.info("UI: user IS signed in");
            this.setAuthedState();
            this.hideStatsAlert();
            this.updateAll();
            this.timerManager.startTimer("overall_stats");
        }
        else {
            console.info("UI: user is NOT signed in");
            this.setUnAuthedState();
        }


        // Event listeners

        this.widget.panel.port.on("login_submitted", function(userLogin) {
            // console.log("UI: pre createSession");
            api.createSession(userLogin, function(response) {
                // console.log("UI: createSession callback");
                UI.widget.panel.port.emit("sign_in_response", response);
                // console.log("UI: post sign_in_response");

                if (response.success) {
                    api.setAuth(response.data.user_id, response.data.username, response.data.auth_token);
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

        this.widget.panel.port.on("manual_refresh", function() {
            UI.updateAll();
        });

        this.widget.panel.port.on("sign_out", function() {
            UI.signOut();
        });

        this.widget.panel.port.on("open_tab_link_clicked", function(url) {
            if (url.indexOf("{pts}/") === 0) {
                url = api.ptsUrl + url.replace("{pts}/", "");
            }

            tabs.open(url);
        });

        return this;
    }
}).init();

// Export as CommonJS module
exports.UI = UI;
