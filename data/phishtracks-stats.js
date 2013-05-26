var wrappedWindow = content.wrappedJSObject;

// PhishTracks Stats (PTS) var
var PTS = {
	soundManager: wrappedWindow.soundManager,
	player: wrappedWindow.App.player
};

PTS.wrapOnFinishCallback = function(options) {
	if (options.__pts_onfinishWrapped == true) {
		console.log("onfinish already wrapped")
		return;
	}

	console.log("wrapping onfinish for '" + options.id + "'")
	var oldOnFinish = options.onfinish;

	options.onfinish = function(callback) {
		var currTrack = PTS.player.get("currentTrack");
		var currShow = currTrack.collection.show;
		self.port.emit("trackFinished", { playedTrack: currTrack,
										  show: currShow });
		oldOnFinish();
		console.log("onfinish callback wrapper");
	}

	options.__pts_onfinishWrapped = true;
}

PTS.wrapCreateSound = function() {
	console.log("wrapping createSound");
	var oldCreateSound = PTS.soundManager.createSound;

	PTS.soundManager.createSound = function(options) {
		console.log("createSound wrapper");
		PTS.wrapOnFinishCallback(options);
		return oldCreateSound.call(PTS.soundManager, options);
	} 
}

PTS.hookAlreadyPlayingTrack = function() {
	var sounds = PTS.soundManager.sounds;

	for (var key in sounds) {
		var sound = sounds[key];
		
		if (sound.playState == 1) {  // 1 indicates playing or buffering
			console.log("sound is playing");
			PTS.wrapOnFinishCallback(sound._iO);
		}
	}
}

PTS.wrapCreateSound();

// Only call this once, for when a track is playing when the addon first loads.
// Wait a bit before hooking already playing track to avoid what seems like a
// race condition. Didn't investigate.
setTimeout(PTS.hookAlreadyPlayingTrack, 1000);
