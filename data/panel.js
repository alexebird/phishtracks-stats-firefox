// Content script for login panel (sign_in.html)

$("#new_user").submit(function() {
	console.log("login form submitted");
	var userLogin = { "user_login": { 
					       "login":    $("#user_login").val(),
					       "password": $("#user_password").val() }};
	self.port.emit("submit", userLogin);
	return false;
});

self.port.on("sign_in_response", function(response) {
	$("#login_feedback").html(response.message);

	if (response.success) {

	}
	else {
		// change color for error feedback or something
	}
});


// stats.html

$("#sign-out-button").click(function(){
	self.port.emit("sign_out");
});

$("#refresh-stats").click(function(){
	self.port.emit("manual_stats_refresh");
});

self.port.on("overall_stats_update", function(stats) {
	$("#overall-stats").html(JSON.stringify(stats));
});

self.port.on("user_stats_update", function(stats) {
	$("#user-stats").html(JSON.stringify(stats));
});
