// Content script for the panel


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
		$("#sign-in-alert .alert-text").html("<b>Error!</b> " + response.message);
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

$("#refresh-button").click(function(){
	self.port.emit("manual_refresh");
});

self.port.on("overall_stats_updated", function(stats) {
	$("#overall-tracks-played-value").html(stats.tracks_played);
	$("#overall-total-time-value").html(stats.total_time);

	var rows = $("#overall-top-tracks tr");
	$.each(stats.top_tracks, function(i, track) {
		var row = $(rows[i]);
		$(".track-ranking", row).html(i + 1);
		$("a.track-title", row).html(track.title);
		$("a.track-title", row).attr("data-url", track.url);
		$("a.show-date", row).html(track.show_info.show_date + ' - ' + track.show_info.location);
		$("a.show-date", row).attr("data-url", track.show_info.url);
		$(".play-count", row).html(track.play_count + " plays");
	});
});

self.port.on("user_stats_updated", function(stats) {
	$("#user-tracks-played-value").html(stats.tracks_played);
	$("#user-total-time-value").html(stats.total_time);
	$("#user-catalog-progress-value").html(stats.catalog_progress.split(" ").join("<br/>"));
});

self.port.on("user_history_updated", function(history) {
	var rows = $("#user-history tr");
	$.each(history, function(i, track) {
		var row = $(rows[i]);
		$("a.track-title", row).html(track.title);
		$("a.track-title", row).attr("data-url", track.url);
		$("a.show-date", row).html(track.show_info.show_date + ' - ' + track.show_info.location);
		$("a.show-date", row).attr("data-url", track.show_info.url);
		$(".time-since-played", row).html(track.time_since_played + ' ago');
	});
});

installOpenTabLinkHandlers();
