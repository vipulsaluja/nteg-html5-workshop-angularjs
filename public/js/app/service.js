(function() {
	angular.module("demoApp")
	.factory("homeService", ['$http', '$q', function($http, $q){
		function fetchItems (){
			var deferred = $q.defer();
			$http.get('items')
				.success(function(data) {
					deferred.resolve(data);
				})
				.error(function(error) {
					logger.log('Error while loading items');
				});
			return deferred.promise;
		}

		return {
			fetchItems: fetchItems
		};
	}]);
})();