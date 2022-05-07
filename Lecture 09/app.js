(function (){
    angular.module("DIApp", [])
    .controller("DIController", function ($scope, $filter){ //here we inject a new service called $filter
        $scope.name = '';
        $scope.upper = function(){
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        };

    });
})();