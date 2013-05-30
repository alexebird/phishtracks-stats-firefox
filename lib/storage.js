var ss = require("sdk/simple-storage");

var Storage = {
	ss: ss.storage,

	init: function() {
		console.log("Storage: init");
		if (!this.ss.auth) {  // only runs when ss.auth hasn't been set, ie the first run.
			console.log("Storage: initializing ss.auth");
			this.ss.auth = { userId: null, username: null, token: null };
		}
	},

	getAuth: function() {
		return this.ss.auth;
	},

	storeAuth: function(auth) {
		this.ss.auth = auth;
		console.log("Storage: storing auth <" + JSON.stringify(auth) + ">");
	}
};

exports.Storage = Storage;
