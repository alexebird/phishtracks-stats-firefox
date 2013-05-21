// This module interfaces with the PhishTracksStats API

function postPlayedTrack(playedTrackData) {
	Request({
		url: "http://localhost:3000/played_tracks.json",
		contentType: "application/json",
		content: JSON.stringify(playedTrackData),
		onComplete: function(response) {
			console.log("server response: " + response.status);
		}
	}).post();
}