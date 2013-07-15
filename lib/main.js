var data    = require("sdk/self").data;
var PageMod = require("sdk/page-mod").PageMod;
var API     = require("./api").API;
var UI      = require("./ui").UI;

var logLevel = require("sdk/system").staticArgs.logLevel || "warn";
console.log("loglevel set to " + logLevel);
require("sdk/preferences/service").set("extensions." + require("sdk/self").id + ".sdk.console.logLevel", logLevel);

// UI.init();

PageMod({
    include: "*.phishtracks.com",
    // include: "*",
    contentScriptFile: [data.url('js/jquery-1.9.1.min.js'),
                        data.url('phishtracks-content-script.js')],

    onAttach: function(worker) {
        worker.port.on("track_finished", function(playedTrackData) {
            API.createPlayedTrack(playedTrackData, function(response) {
                if (response.success) {
                    UI.updateAll();
                }
                else {
                    console.warn("PageMod: could not create played track");
                }
            });
        });
    }
});
