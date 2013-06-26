/**
 * Content Script
 */


/************** Sign In *************/

$("#new-user").submit(function() {
    console.log("SIGN-IN PANEL: login form submitted");
    var userLogin = { "user_login": {
                        "login":    $("#user-login").val(),
                        "password": $("#user-password").val() }};
    self.port.emit("login_submitted", userLogin);
    return false;
});


// Event handling

self.port.on("sign_in_response", function(response) {
    if (!response.success) {
        // console.log("DEBUG: sign in success");
        // $("#sign-in-alert").removeClass("alert-error").addClass("alert-success");
        // $("#sign-in-alert .alert-text").html("Sign in successful.");
        // $("#sign-in-alert").show();
    // }
    // else {
        // console.log("DEBUG: sign in failed");
        // $("#sign-in-alert").removeClass("alert-success").addClass("alert-error");
        $("#sign-in-alert .alert-text").html(response.message);
        $("#sign-in-alert").show();
    }
});

self.port.on("reset_login_form", function() {
    $("#user-login").val("");
    $("#user-password").val("");
    $("#sign-in-alert").hide();
});


/************** Stats *************/

$("#sign-out-button").click(function(){
    self.port.emit("sign_out");
});

$(".refresh-button").click(function(){
    self.port.emit("manual_refresh");
});

self.port.on("show_stats_alert", function(message) {
    console.log("SIGN-IN PANEL: showing stats alert");
    $("#stats-alert .alert-text").html(message);
    $("#stats-alert").show();
});

self.port.on("hide_stats_alert", function() {
    if ($("#stats-alert").is(":visible")) {
        console.log("SIGN-IN PANEL: hiding stats alert");
        $("#stats-alert").hide();
    }
});

self.port.on("overall_stats_updated", function(stats) {
    $("#overall-tracks-played-value").html(stats.tracks_played);
    $("#overall-total-time-value").html(stats.total_time);

    var rows = $("#overall-top-tracks tr");
    $.each(stats.top_tracks, function(i, track) {
        var row = $(rows[i]);
        $(".track-ranking", row).html(i + 1);
        $(".track-title-link", row).html(track.title);
        $(".track-title-link", row).attr("data-url", track.url);
        $(".show-date-link", row).html(track.show_info.show_date + ' - ' + track.show_info.location);
        $(".show-date-link", row).attr("data-url", track.show_info.url);
        $(".play-count", row).html(track.play_count + " plays");
    });
});

self.port.on("user_stats_updated", function(stats) {
    $("#user-tracks-played-value").html(stats.tracks_played);
    $("#user-total-time-value").html(stats.total_time);
    $("#user-catalog-progress-value").html(stats.catalog_progress.split(" ").join("<br>"));
});

self.port.on("user_history_updated", function(history) {
    var rows = $("#user-history tr");
    $.each(history, function(i, track) {
        var row = $(rows[i]);
        $(".track-title-link", row).html(track.title);
        $(".track-title-link", row).attr("data-url", track.url);
        $(".show-date-link", row).html(track.show_info.show_date + ' - ' + track.show_info.location);
        $(".show-date-link", row).attr("data-url", track.show_info.url);
        $(".time-since-played", row).html(track.time_since_played + ' ago');
    });
});

function initTopTracksTable() {
    for (var i = 0; i < 10; i++) {
        $("#overall-top-tracks tbody").append(
            '<tr>' +
              '<td class="track-ranking">' + (i + 1) + '</td>' +
              '<td class="track-title">' +
                '<a class="open-tab-link track-title-link phishtracks-entity-link"></a>' +
                '<br>' +
                '<a class="open-tab-link show-date-link phishtracks-entity-link"></a>' +
              '</td>' +
              '<td class="play-count track-row-additional-info"></td>' +
            '</tr>');
    }
}
initTopTracksTable();

function initHistoryTable() {
    for (var i = 0; i < 10; i++) {
        $("#user-history tbody").append(
            '<tr>' +
              '<td class="track-title">' +
                '<a class="open-tab-link track-title-link phishtracks-entity-link"></a>' +
                '<br>' +
                '<a class="open-tab-link show-date-link phishtracks-entity-link"></a>' +
              '</td>' +
              '<td class="time-since-played track-row-additional-info"></td>' +
            '</tr>');
    }
}
initHistoryTable();

installOpenTabLinkHandlers();
