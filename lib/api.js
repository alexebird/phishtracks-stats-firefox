/**
 * This module interfaces with the PhishTracksStats API
 */
var system  = require("sdk/system");
var _       = require("./underscore");
var _s      = require("./underscore.string");
var Request = require("sdk/request").Request;
var Storage = require("./storage").Storage;

var API = ({
    ptsUrl: null,
    apiUrl: null,
    auth: null,

    /*
     * Called when there is a 401 response code.
     */
    unauthorizedCallback: null,

    /*
     * Called when there is a 0 response code. (ie, server is unreachable)
     */
    unreachableCallback: null,

    /*
     * Called when there is a 200-range response code. This callback is mainly for keeping track
     * the connectivity state in the UI.
     */
    successfulResponseCallback: null,

    init: function() {
        console.debug("API: init");
        Storage.init();
        this.auth = Storage.getAuth();
        this.ptsUrl = system.staticArgs.ptsHost || "http://www.phishtrackstats.com/";
        this.apiUrl = this.ptsUrl + "api";
        this.printAuth();
        return this;
    },

    printAuth: function() {
        console.debug("API: auth <" + this.auth.userId + ", " + this.auth.username + ", " + this.auth.token + ">");
    },

    getAuth: function() {
        return this.auth;
    },

    setAuth: function(userId, username, authToken) {
        this.auth = { userId: userId, username: username, token: authToken };
        Storage.storeAuth(this.auth);
    },

    clearAuth: function() {
        this.setAuth(null, null, null);
    },

    clearAndDestroyAuth: function() {
        this.destroySession();
        this.clearAuth();
    },

    hasAuth: function() {
        return this.auth.token !== null;
    },

    getAuthTokenParamString: function() {
        if (this.hasAuth()) {
            return "auth_token=" + this.auth.token;
        }
        else
            return "";
    },

    createAuthedUrl: function(url) {
        return this.apiUrl + url + "?" + this.getAuthTokenParamString();
    },

    makeGetRequest: function(url, onComplete) {
        var _this = this;
        var opts = {
            url: this.createAuthedUrl(url),
            contentType: "application/json",
            content: null,
            onComplete: function(response) {
                _this.responseCallbackWrapper(response, onComplete);
            }};

        console.info("API: GET " + opts.url);

        Request(opts).get();
    },

    makePostRequest: function(url, content, onComplete) {
        var _this = this;
        var opts = {
            url: this.createAuthedUrl(url),
            contentType: "application/json",
            content: JSON.stringify(content),
            onComplete: function(response) {
                _this.responseCallbackWrapper(response, onComplete);
            }};

        var body = "";
        if (content.user_login) {
            var _c = JSON.parse(JSON.stringify(content));  // Make deep copy
            _c.user_login.password = "FILTERED";
            body = JSON.stringify(_c);
        }
        else {
             body = JSON.stringify(content);
        }
        console.info("API: POST " + opts.url + " -- " + body);

        Request(opts).post();
    },

    makeDeleteRequest: function(url, onComplete) {
        var _this = this;
        var opts = {
            url: this.createAuthedUrl(url),
            headers: { "X-Http-Method-Override": "delete" },
            contentType: "application/json",
            content: "",
            onComplete: function(response) {
                if (onComplete)
                    _this.responseCallbackWrapper(response, onComplete);
            }};

        console.info("API: DELETE " + opts.url);

        Request(opts).post();
    },

    responseCallbackWrapper: function(response, callback) {
        var newResponse = { status:  response.status,
                            success: response.status >= 200 && response.status <= 299,
                            data: response.json || {} };
        newResponse.failure = !newResponse.success;

        if (newResponse.status === 0) {  // request didnt go through (ie, api is down)
            newResponse.data.error = "PhishTracks Stats is unavailable";

            if (_.isFunction(this.unreachableCallback)) {
                this.unreachableCallback.call(undefined, newResponse);
            }
        }
        else if (newResponse.status === 401) {  // Unauthorized
            if (this.hasAuth()) {
                console.warn("API: clearing stored auth due to 401 response");
                this.clearAuth();  // If the server rejects the auth token, then remove it here since it's invalid.

                if (_.isFunction(this.unauthorizedCallback)) {
                    this.unauthorizedCallback.call(undefined, newResponse);
                }
            }
        }

        // var respStr = JSON.stringify(newResponse);
        var respStr = _s.truncate(JSON.stringify(newResponse), 120);
        console.info("API: response: " + respStr);

        if (_.isFunction(callback)) {
            callback(newResponse);
        }

        if (newResponse.success && _.isFunction(this.successfulResponseCallback)) {
            this.successfulResponseCallback.call(undefined, newResponse);
        }
    },

    ping: function(onComplete) {
        this.makeGetRequest("/ping.json", onComplete);
    },

    createSession: function(userLogin, onComplete) {
        this.makePostRequest("/users/sign_in.json", userLogin, onComplete);
    },

    destroySession: function(onComplete) {
        this.makeDeleteRequest("/users/sign_out.json", onComplete);
    },

    createPlayedTrack: function(playedTrackData, onComplete) {
        this.makePostRequest("/played_tracks.json", { played_track: playedTrackData }, onComplete);
    },

    getOverallStats: function(onComplete) {
        this.makeGetRequest("/stats/overall.json", onComplete);
    },

    getUserStats: function(onComplete) {
        this.makeGetRequest("/stats/users/" + this.auth.userId + ".json", onComplete);  // TODO escape user ID for security?
    },

    getUserHistory: function(onComplete) {
        this.makeGetRequest("/stats/users/" + this.auth.userId + "/history.json", onComplete);  // TODO escape user ID for security?
    }
}).init();

// export as CommonJS module
exports.API = API;
