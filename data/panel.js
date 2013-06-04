// Content script for login panel (sign_in.html)

$("#new_user").submit(function() {
	console.log("panel: login form submitted");
	var userLogin = { "user_login": { 
					       "login":    $("#user_login").val(),
					       "password": $("#user_password").val() }};
    // $("#user_login").val("");
    // $("#user_password").val("");
	self.port.emit("submit_login", userLogin);
	return false;
});

self.port.on("sign_in_response", function(response) {
	$("#login_feedback").html(response.message);

	if (response.success) {

	}
	else {
		$("#login_feedback").css("color", "red");
	}
});


// stats.html

$("#sign-out-button").click(function(){
	self.port.emit("sign_out");
});

// $("#refresh_stats_button").click(function(){
// 	self.port.emit("manual_stats_refresh");
// });

// function renderCalculationRow(name, value) {
// 	var newRow = $('<tr class="calculations_row"><td class="calculation_name"></td><td class="calculation_value"></td></tr>');
// 	$(".calculation_name", newRow).html(name);
// 	$(".calculation_value", newRow).html(value);
// 	return newRow;
// }

// function renderTopTracksTable(top_tracks) {
// 	var newBody = $("<tbody>");

// 	$.each(top_tracks, function(i, track) {	
// 		var newRow = $('<tr class="most_played_row"><td class="most_played_ranking"></td><td class="most_played_name"></td><td class="most_played_play_count"></td></tr>');
// 		$(".most_played_ranking", newRow).html(i + 1);
// 		var trackLink = $('<a class="open_tab_link">');
// 		trackLink.html(track.title);
// 		var url = 'http://www.phishtracks.com/' + track.url;
// 		trackLink.attr("data-url", url);
// 		$(".most_played_name", newRow).html(trackLink);
// 		$(".most_played_play_count", newRow).html(track.play_count);
// 		newBody.append(newRow);
// 	});

// 	return newBody;
// }

function installOpenTabLinkHandlers() {
	$(".open-tab-link").click(function(eventObject) {
		self.port.emit("open_tab_link_clicked", $(eventObject.target).attr("data-url"));
	});
}

installOpenTabLinkHandlers();  // TODO update classes

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
