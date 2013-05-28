var ss = require("sdk/simple-storage");

var Storage = {
	storage: ss.storage,

	init: function() {
		if (!this.storage.authToken)
			this.storage.authToken = null;
		if (!this.storage.username)
			this.storage.username = null;
		if (!this.storage.userId)
			this.storage.userId = null;
	},

	isUserSignedIn: function() {
		return this.storage.authToken != null;
	},

	storeSession: function(userId, username, authToken) {
		Storage.storage.userId = userId;
		Storage.storage.username = username;
		Storage.storage.authToken = authToken;
		console.log("storing session <" + this.storage.userId + ", " + this.storage.username + ", " + this.storage.authToken + ">");
	},

	debug: function() {
		console.log("stored session <" + this.storage.username + ", " + this.storage.authToken + ">");
	},

	invalidateLocalSession: function() {
		Storage.storeSession(null, null, null);
	}
};

exports.Storage = Storage;
