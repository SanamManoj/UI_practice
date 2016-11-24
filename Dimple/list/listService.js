app.service("bookService", function($http) {
	this.getBookList = function(configObj) {
		var httppromiseObj = $http.get(
				"http://localhost:8080/jerseyrest/rest/books", configObj);
		return httppromiseObj;

	}

})
