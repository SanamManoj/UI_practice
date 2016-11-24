app.controller("contactCntrl", function($scope,$http,contactService) {


	var configObj = {
		"headers" : {
			"Accept" : "application/json"
		}
	};
	var httppromiseObj1 = $http.get(
			"http://localhost:8080/jerseyrest/rest/contact", configObj);
//	var httppromiseObj1 = ContactService.getContactList(configObj);
//	console.log("got promise object")
	httppromiseObj1.success(function(response) {
		console.log("got response");
		$scope.ContactList= response.contact;
	})

	httppromiseObj1.error(function(failureRes) {
		console.error(failureRes);

	})
	
	

});
