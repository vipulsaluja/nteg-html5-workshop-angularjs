(function() {
    angular
        .module("demoApp")
        .directive('headerItem', headerItem);

    function headerItem() {
        return {
            restrict: 'EA',
            scope: true,
            templateUrl: 'partials/header.html'
        };
    }
})();