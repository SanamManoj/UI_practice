

app.controller("addBookCntrlr", function($scope, $http, $location) {

	$scope.addBook = function() {

		var configObj = {
			"headers" : {
				"Content-Type" : "application/json"
			}
		};

		var newBookData = {

			'name' : $scope.name,
			'author' : $scope.author,
			'price' : $scope.price

		};
		var httpObj = $http.post("http://localhost:8080/jerseyrest/rest/books",
				newBookData, configObj);

		httpObj.success(function(response) {
			alert("Book added Successfully");
			$location.path("list");

		});

		httpObj.error(function(response) {
			alert("there was an error");

		});
	}

});