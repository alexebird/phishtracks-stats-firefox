var wrappedWindow = content.wrappedJSObject;  // Escape FF's sandbox for add-ons

/**
 * PhishTracks Stats
 */
var PTS = {
    soundManager: wrappedWindow.soundManager,
    player: wrappedWindow.App.player,

    wrapOnFinishCallback: function(options) {
        if (options.__pts_onfinishWrapped === true) {
            console.debug("PTS: onfinish already wrapped");
            return;
        }

        console.debug("PTS: wrapping onfinish for '" + options.id + "'");
        var oldOnFinish = options.onfinish;

        options.onfinish = function(callback) {
            var currTrack = PTS.player.get("currentTrack");
            var currShow = currTrack.collection.show;
            var playedTrackData = { track_id:  currTrack.get("id"),
                                    show_id:   currShow.get("id"),
                                    show_date: currShow.get("show_date") };
            self.port.emit("track_finished", playedTrackData );
            oldOnFinish();
            console.debug("PTS: onfinish callback wrapper");
        };

        options.__pts_onfinishWrapped = true;
    },

    wrapCreateSound: function() {
        console.debug("PTS: wrapping createSound");
        var oldCreateSound = this.soundManager.createSound;

        this.soundManager.createSound = function(options) {
            console.debug("PTS: createSound wrapper");
            PTS.wrapOnFinishCallback(options);
            return oldCreateSound.call(function(options) { PTS.soundManager(options); }, options);
        };
    },

    hookAlreadyPlayingTrack: function() {
        var sounds = PTS.soundManager.sounds;

        for (var key in sounds) {
            var sound = sounds[key];

            if (sound.playState == 1) {  // 1 indicates playing or buffering
                console.debug("PTS: sound is playing");
                PTS.wrapOnFinishCallback(sound._iO);
            }
        }
    }
};

PTS.wrapCreateSound();

// Only call this once, for when a track is playing when the addon first loads.
// Wait a bit before hooking already playing track to avoid what seems like a
// race condition. Didn't investigate.
setTimeout(function() { PTS.hookAlreadyPlayingTrack(); }, 1000);
