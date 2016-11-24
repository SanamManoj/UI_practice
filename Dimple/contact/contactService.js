app.service("contactService", function($http) {
	this.getContactList = function(configObj) {
		var httppromiseObj1 = $http.get(
				"http://localhost:8080/jerseyrest/rest/contact", configObj);
		return httppromiseObj1;

	}

})