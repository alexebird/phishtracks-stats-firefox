/*
 * Timer
 *
 * It's a high-level absraction of Javascript timers.
 */

var timers = require("sdk/timers");
var _      = require("./underscore");
var _s     = require("./underscore.string");

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
            console.debug(_s.sprintf("TM: startTimer interval <id=%d, name=%s, ms=%d>", timerId, timer.name, timer.ms));
        }
        else if (timer.timerType === "timeout") {
            var timerId = timers.setTimeout(timer.callback, timer.ms);
            this.runningTimers[timer.name] = timerId;
            timer.running = true;
            console.debug(_s.sprintf("TM: startTimer timeout <id=%d, name=%s, ms=%d>", timerId, timer.name, timer.ms));
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
            console.debug(_s.sprintf("TM: stopTimer interval <id=%d, name=%s, ms=%d>", timerId, timer.name, timer.ms));
        }
        else if (timer.timerType === "timeout") {
            timers.clearTimeout(timerId);
            timer.running = false;
            console.debug(_s.sprintf("TM: stopTimer timeout <id=%d, name=%s, ms=%d>", timerId, timer.name, timer.ms));
        }
    }
};

exports.TimerManager = TimerManager;
