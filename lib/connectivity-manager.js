/*
 * ConnectivityManager
 *
 * CM is used by the UI to manage changes related to changes in connectivity. For instance,
 * if the PTS api is unreachable then the UI should show a message.
 *
 * TODO this could also be used to manage auth state by being made more general, like "StateManager" and non-singleton.
 */

var _ = require("./underscore");

function ConnectivityManager(opts) {
    this.connected = true;
    this.callbacks = { connectivityMade: opts['connectivityMadeCallback'],
                       connectivityLost: opts['connectivityLostCallback']};
}

ConnectivityManager.prototype.callCallback = function(name, parameter) {
    if (!_.isUndefined(this.callbacks[name])) {
        this.callbacks[name].call(undefined, parameter);
    }
};

ConnectivityManager.prototype.hasConnectivity = function() {
    return this.connected === true;
};

ConnectivityManager.prototype.hasUnknownConnectivity = function() {
    return _.isNull(this.connected);
};

ConnectivityManager.prototype.connectivityLost = function(data) {
    console.log("CM: connectivityLost");
    if (this.hasConnectivity() || this.hasUnknownConnectivity()) {
        this.connected = false;
        this.callCallback('connectivityLost', data);
    }
};

ConnectivityManager.prototype.connectivityMade = function(data) {
    console.log("CM: connectivityMade");
    if (!this.hasConnectivity()) {
        this.connected = true;
        this.callCallback('connectivityMade', data);
    }
};

exports.ConnectivityManager = ConnectivityManager;
