// Content script for login panel

$("#new_user").submit(function() {
	console.log("login form submitted");
	var userLogin = { "user_login": { 
					       "login":    $("#user_login").val(),
					       "password": $("#user_password").val() }};
	self.port.emit("submit", userLogin);
	return false;
});

self.port.on("response", function(response) {
	$("#login_feedback").html(response.message);

	if (response.success) {

	}
	else {
		// change color for error feedback or something
	}
});

