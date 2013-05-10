var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");
var Request = require("sdk/request").Request;
 

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

pageMod.PageMod({
	include: "*.phishtracks.com",
	contentScriptFile: [data.url('jquery-1.9.1.min.js'),
						data.url('phishtracks-stats.js')],
	onAttach: function(worker) {
		worker.port.on("trackFinished", function(playedTrackData) {
			console.log("track is finished.");
			var requestContent = { playedTrack: {
								       played_track_id: playedTrackData.playedTrack.id,
									   show: playedTrackData.show }};
			console.log(JSON.stringify(requestContent));
			postPlayedTrack(requestContent);
		});
	}
});