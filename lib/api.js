// This module interfaces with the PhishTracksStats API

var Request = require("sdk/request").Request;
var Storage = require("./storage").Storage;

API = {
	apiUrl: "http://localhost:3000/api",
	auth: null,

	init: function() {
		console.log("API: init");
		Storage.init();
		this.auth = Storage.getAuth();
		return this;
	},

	printAuth: function() {
		console.log("API: auth <" + this.auth.userId + ", " + this.auth.username + ", " + this.auth.token + ">");
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
		this.destroySession();
	},

	hasAuth: function() {
		return this.auth.token != null;
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

		console.log("API: GET " + opts.url);

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

		console.log("API: POST " + opts.url);
		if (content.user_login) {
			var _c = JSON.parse(JSON.stringify(content));
			_c.user_login.password = "HIDDEN";
			console.log("     " + JSON.stringify(_c));
		}
		else {
			console.log("     " + JSON.stringify(content));
		}

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

		console.log("API: DELETE " + opts.url);

		Request(opts).post();
	},

	responseCallbackWrapper: function(response, callback) {
		var newResponse = { origResp: response,
							status:  response.status,
							success: response.status >= 200 && response.status <= 299,
			                message: null,
			            	json: response.json == null ? {} : response.json };

		if (response.status == 0)  // request didnt go through (ie, api is down)
			newResponse.message = "Request was not sent";
		else {
			if (response.json != null) {
				newResponse.message = response.json.message;
			}
			else {
				newResponse.message = 'no message'; // TODO
			}
		}

		console.log("API: response: " + JSON.stringify(newResponse));
		callback(newResponse);
	},

	createSession: function(userLogin, onComplete) {
		this.makePostRequest("/users/sign_in.json", userLogin, onComplete);
	},

	// reAuthSession: function(onComplete) {
		// this.makePostRequest("/users/sign_in.json", {}, onComplete);
	// },

	destroySession: function(onComplete) {
		this.makeDeleteRequest("/users/sign_out.json", onComplete);
	},

	createPlayedTrack: function(playedTrackId, onComplete) {
		this.makePostRequest("/played_tracks.json", { played_track: playedTrackId }, onComplete);
	},

	getOverallStats: function(onComplete) {
		this.makeGetRequest("/stats/overall.json", onComplete);	
	},

	getUserStats: function(onComplete) {
		this.makeGetRequest("/stats/user/" + this.auth.userId + ".json", onComplete);	// TODO escape user ID for security?
	}
}.init();



// export as CommonJS module
exports.API = API;
