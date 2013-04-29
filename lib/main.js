var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");
 
// Create a page mod
// It will run a script whenever a ".org" URL is loaded
// The script replaces the page contents with a message
pageMod.PageMod({
	include: "*.phishtracks.com",
	contentScriptFile: [data.url('jquery-1.9.1.min.js'),
						data.url('phishtracks-stats.js')],
	onAttach: function(worker) {
		worker.port.on("trackFinished", function(track) {
			console.log("track is finished.");
			console.log(JSON.stringify(track.track));
		});
	}
});