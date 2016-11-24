app.controller("listCntrl", function($scope, bookService) {

	$scope.bookGrid = {};
	$scope.bookGrid.enableFiltering = true;

	$scope.bookGrid.columnDefs = [ {
		"name" : "name"
	}, {
		"name" : "author"
	}, {
		"name" : "price"
	}, {
		"name" : "Action",
		"enableFiltering" : false
	} ];

	var configObj = {
		"headers" : {
			"Accept" : "application/json"
		}
	};

	httppromiseObj = bookService.getBookList(configObj);
	console.log("got promise object")
	httppromiseObj.then(function(response) {
		console.log("got response");
		$scope.bookGrid.data = response.data.book;

	})

	httppromiseObj.error(function(failureRes) {
		console.error(failureRes);

	})
	$scope.bookGrid.paginationPageSize = 10;
	$scope.bookGrid.paginationPageSizes= [10,20,30];
	

});
