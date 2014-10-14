(function() {
	angular
	.module("demoApp")
	.controller("HomeController", ['$scope', 'homeService', function($scope, homeService){
		var fetchItems = homeService.fetchItems();
		fetchItems.then(function(data){
			$scope.items = data;
			$scope.calculateTotal();
		});

		$scope.calculateTotal = function (){
			var total = 0;
			for (var i=0; i<$scope.items.length; i++){
      			total = total + parseInt($scope.items[i].price);
			}
			$scope.total = total;
		};
	}]);
})();