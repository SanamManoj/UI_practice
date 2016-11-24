
	var app = angular.module("bookApp",[  "ngRoute","ui.grid","ui.grid.pagination","pascalprecht.translate" ]);
	
app.directive("bookInfo",function(){
	var directiveEle={};
	directiveEle.restrict="E";
	directiveEle.templateUrl="list/list.html";
	return directiveEle;
	
});