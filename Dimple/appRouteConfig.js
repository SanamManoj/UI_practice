app.config(function($routeProvider) {
		$routeProvider.when("/list", {
			templateUrl : "list/list.html",
			controller: "listCntrl"
		}).when("/bestsellers", {
			templateUrl : "bestsellers/bestsellers.html"
		}).when("/authors", {
			templateUrl : "authors/authors.html"
		}).when("/addBook", {
			templateUrl : "addBook/addView.html",
				controller: "addBookCntrlr"
		}).when("/contact", {
			templateUrl : "contact/contact.html",
				controller: "contactCntrl"
		}).when("/dropDown", {
			templateUrl : "i18n/i18n.html",
			controller: "i18nCtrl"
	    }) .otherwise({
		   templateUrl : "list/list.html"
		});
	});



