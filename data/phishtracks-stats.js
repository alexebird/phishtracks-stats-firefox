// PhishTracks Stats var
var PTS = {
	soundManager: null,
	player: null
};

PTS.player = content.wrappedJSObject.App.player;
PTS.soundManager = content.wrappedJSObject.soundManager;

var oldCreateSound = PTS.soundManager.createSound;
PTS.soundManager.createSound = function(options) {
	//insert callback to add-on in onFinish event
	options.onfinish = function() {
		PTS.player.playNext();
		alert("INJECTION");
	};

	return oldCreateSound.call(PTS.soundManager, options);
} 
