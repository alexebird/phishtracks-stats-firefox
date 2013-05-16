var data = require("sdk/self").data;
var PageMod = require("sdk/page-mod").PageMod;
var Request = require("sdk/request").Request;
var Panel = require("sdk/panel").Panel;
var Widget = require("sdk/widget").Widget;


var panel = Panel({
  width: 500,
  height: 300,
  contentURL: "http://localhost:3000/"
});
 
//panel.show();

Widget({
  id: "phish-tracks-stats",
  label: "PhishTracks.com Stats",
  contentURL: "http://www.mozilla.org/favicon.ico", // TODO change icon
  panel: panel
});
 

function postPlayedTrack(playedTrackData) {
	Request({
		url: "http://localhost:3000/played_tracks.json",
		contentType: "application/json",
		content: JSON.stringify(playedTrackData),
		onComplete: function(response) {
			console.log(response.status);
		}
	}).post();
}

//postPlayedTrack({});

PageMod({
	include: "*.phishtracks.com",
	contentScriptFile: [data.url('jquery-1.9.1.min.js'),
						data.url('phishtracks-stats.js')],
	onAttach: function(worker) {
		worker.port.on("trackFinished", function(playedTrackData) {
			console.log("track is finished.");
			var requestContent = { played_track: {
								       played_track_id: playedTrackData.playedTrack.id,
									   show: playedTrackData.show }};
			// console.log(JSON.stringify(requestContent));
			console.log("id: " + requestContent.played_track.played_track_id);
			postPlayedTrack(requestContent);
		});
	}
});
