var wrappedWindow = content.wrappedJSObject;  // Escape FF's sandbox for add-ons

// PhishTracks Stats (PTS)
var PTS = {
	soundManager: wrappedWindow.soundManager,
	player: wrappedWindow.App.player
};

PTS.wrapOnFinishCallback = function(options) {
	if (options.__pts_onfinishWrapped == true) {
		console.log("pts: onfinish already wrapped")
		return;
	}

	console.log("pts: wrapping onfinish for '" + options.id + "'")
	var oldOnFinish = options.onfinish;

	options.onfinish = function(callback) {
		var currTrack = PTS.player.get("currentTrack");
		// var currShow = currTrack.collection.show;
		self.port.emit("track_finished", currTrack.id );
		oldOnFinish();
		console.log("pts: onfinish callback wrapper");
	}

	options.__pts_onfinishWrapped = true;
}

PTS.wrapCreateSound = function() {
	console.log("pts: wrapping createSound");
	var oldCreateSound = PTS.soundManager.createSound;

	PTS.soundManager.createSound = function(options) {
		console.log("pts: createSound wrapper");
		PTS.wrapOnFinishCallback(options);
		return oldCreateSound.call(PTS.soundManager, options);
	} 
}

PTS.hookAlreadyPlayingTrack = function() {
	var sounds = PTS.soundManager.sounds;

	for (var key in sounds) {
		var sound = sounds[key];
		
		if (sound.playState == 1) {  // 1 indicates playing or buffering
			console.log("pts: sound is playing");
			PTS.wrapOnFinishCallback(sound._iO);
		}
	}
}

PTS.wrapCreateSound();

// Only call this once, for when a track is playing when the addon first loads.
// Wait a bit before hooking already playing track to avoid what seems like a
// race condition. Didn't investigate.
setTimeout(PTS.hookAlreadyPlayingTrack, 1000);
