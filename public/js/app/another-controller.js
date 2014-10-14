(function() {
	angular
	.module("anotherModule",[])
	.controller("AnotherController", ['$scope', function($scope){
		alert("another controller");
	}]);
})();