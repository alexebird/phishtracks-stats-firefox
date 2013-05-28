// This module interfaces with the PhishTracksStats API

var Request = require("sdk/request").Request;
var pts = {};

pts.API = {
	apiUrl: "http://localhost:3000/api",
	userId: null,
	username: null,
	authToken: null,

	setAuth: function(userId, username, authToken) {
		this.userId = userId;
		this.username = username;
		this.authToken = authToken;
	},

	authTokenParam: function() {
		if (this.authToken != null) {
			return "auth_token=" + this.authToken;
		}
		else
			return "";
	},

	makeGetRequest: function(url, onComplete) {
		var opts = {
			url: pts.API.apiUrl + url + "?" + pts.API.authTokenParam(),
			contentType: "application/json",
			content: null,
			onComplete: function(response) {
				pts.API.responseCallbackWrapper(response, onComplete);
			}};

		console.log("API: GET " + opts.url);

		Request(opts).get();
	},

	makePostRequest: function(url, content, onComplete) {
		var opts = {
			url: pts.API.apiUrl + url + "?" + pts.API.authTokenParam(),
			contentType: "application/json",
			content: JSON.stringify(content),
			onComplete: function(response) {
				pts.API.responseCallbackWrapper(response, onComplete);
			}};

		console.log("API: POST " + opts.url);

		Request(opts).post();
	},

	makeDeleteRequest: function(url, onComplete) {
		var opts = {
			url: pts.API.apiUrl + url + "?" + pts.API.authTokenParam(),
			headers: { "X-Http-Method-Override": "delete" },
			contentType: "application/json",
			content: "",
			onComplete: function(response) {
				pts.API.responseCallbackWrapper(response, onComplete);
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

	reAuthSession: function(onComplete) {
		this.makePostRequest("/users/sign_in.json", {}, onComplete);
	},

	destroySession: function(onComplete) {
		this.makeDeleteRequest("/users/sign_out.json", onComplete);
	},

	createPlayedTrack: function(playedTrack, onComplete) {
		this.makePostRequest("/played_tracks.json", playedTrack, onComplete);
	},

	getOverallStats: function(onComplete) {
		this.makeGetRequest("/stats/overall.json", onComplete);	
	},

	getUserStats: function(onComplete) {
		this.makeGetRequest("/stats/user/" + this.userId + ".json", onComplete);	
	}
};

// export as CommonJS module
exports.pts = pts;
