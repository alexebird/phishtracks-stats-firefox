// This module interfaces with the PhishTracksStats API

var Request = require("sdk/request").Request;

var PtsApi = {
	apiUrl: "http://localhost:3000/api",

	makePostRequest: function(url, content, onComplete) {
		Request({
			url: PtsApi.apiUrl + url,
			contentType: "application/json",
			content: JSON.stringify(content),
			onComplete: function(response) {
				PtsApi.responseCallbackWrapper(response, onComplete);
			}
		}).post();
	},

	responseCallbackWrapper: function(response, callback) {
		var newResponse = { origResp: response,
							status:  response.status,
							success: response.status >= 200 && response.status <= 299,
			                message: null,
			            	json: response.json == null ? {} : response.json };

		if (response.status == 0)  // request didnt go through (ie, api is down)
			newResponse.message = "Request was not sent";
		else
			newResponse.message = response.json.message;

		console.log('API response: ' + JSON.stringify(newResponse));
		callback(newResponse);
	},

	createSession: function(userLogin, onComplete) {
		this.makePostRequest("/users/sign_in.json", userLogin, onComplete);
	},

	createPlayedTrack: function(playedTrack, onComplete) {
		this.makePostRequest("/played_tracks.json", playedTrack, onComplete);
	}
};

// export as CommonJS module
exports.PtsApi = PtsApi;
