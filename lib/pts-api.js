// This module interfaces with the PhishTracksStats API

var Request = require("sdk/request").Request;

var PTS = {
	apiUrl: "http://localhost:3000/api",

	createSession: function(userLogin, onComplete) {
		var resp = null;
		Request({
			url: PTS.apiUrl + "/users/sign_in.json",
			contentType: "application/json",
			content: JSON.stringify(userLogin),
			onComplete: onComplete  // response is passed to this callback
		}).post();

		return resp;
	},

	createPlayedTrack: function(playedTrack, onComplete) {
		var resp = null;
		Request({
			url: PTS.apiUrl + "/played_tracks.json",
			contentType: "application/json",
			content: JSON.stringify(playedTrack),
			onComplete: onComplete  // response is passed to this callback
		}).post();

		return resp;
	}
};

exports.PTS = PTS;