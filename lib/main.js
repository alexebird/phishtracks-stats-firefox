var data =    require("sdk/self").data;
var PageMod = require("sdk/page-mod").PageMod;
var api =     require("./api").API;
var UI =      require("./ui").UI;

PageMod({
    include: "*.phishtracks.com",
    // include: "*",
    contentScriptFile: [data.url('js/jquery-1.9.1.min.js'),
                        data.url('pt-content-script.js')],

    onAttach: function(worker) {
        api.printAuth();
        UI.init();

        worker.port.on("track_finished", function(playedTrackId) {
            api.createPlayedTrack({ phishtracks_id: playedTrackId }, function(response) {
                if (response.success) {
                    UI.updateAll();
                }
                else {
                    console.log("PageMod: could not create played track");
                }
            });
        });
    }
});
