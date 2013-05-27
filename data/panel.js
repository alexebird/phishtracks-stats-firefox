// Content script for login panel (sign_in.html)

$("#new_user").submit(function() {
	console.log("login form submitted");
	var userLogin = { "user_login": { 
					       "login":    $("#user_login").val(),
					       "password": $("#user_password").val() }};
	self.port.emit("submit", userLogin);
	return false;
});

self.port.on("sign-in-response", function(response) {
	$("#login_feedback").html(response.message);

	if (response.success) {

	}
	else {
		// change color for error feedback or something
	}
});


// stats.html

$("#sign-out-button").click(function(){
	self.port.emit("sign-out");
});

$("#refresh-stats").click(function(){
	self.port.emit("refresh-stats");
});

self.port.on("refresh-stats-response", function(response) {
	if (response.overall == true) {
		if (response.success) {
			$("#overall-stats").html(JSON.stringify(response.json.stats));
		}
		else {
			$("#overall-stats").html("could not refresh overall stats");
		}
	}

	if (response.user == true) {
		if (response.success) {
			$("#user-stats").html(JSON.stringify(response.json.stats));
		}
		else {
			$("#user-stats").html("could not refresh user stats");
		}
	}
});
