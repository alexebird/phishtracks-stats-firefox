// TODO
// X get show info
// - if /shows/:date/:track -style url is the first url when visiting the site, 
//   the the track is played before the hook can be setup. need to install the
//   hook sooner, or have a special case for this.

var wrappedWindow = content.wrappedJSObject;

// PhishTracks Stats (PTS) var
var PTS = {
	soundManager: wrappedWindow.soundManager,
	player: wrappedWindow.App.player
};

PTS.initOnFinishHook = function() {
	alert("installing hook");
	var oldCreateSound = this.soundManager.createSound;
	var _this = this;
	this.soundManager.createSound = function(options) {
		alert('createSound hook called');
		//insert callback to add-on in onFinish event

		var callbackName = 'onfinish';
		var oldCallback = options[callbackName];
		options[callbackName] = function() {
			var currTrack = _this.player.get("currentTrack");
			var currShow = currTrack.collection.show;
			self.port.emit("trackFinished", { playedTrack: currTrack,
											  show: currShow });
			oldCallback();
			alert("onfinish callback called");
		};

		return oldCreateSound.call(_this.soundManager, options);
	} 
}

PTS.initOnFinishHook();