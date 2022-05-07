(function (){
    angular.module("DIApp", [])
    .controller("DIController", DIController);

    DIController.$injection = [$scope, $filter];
    function DIController($scope, $filter){
        $scope.name = '';
        $scope.upper = function(){
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        };
    };
})();