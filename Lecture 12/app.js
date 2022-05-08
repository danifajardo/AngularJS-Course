(function (){
    angular.module("MsgApp", [])
    .controller("MsgController", MsgController);

    MsgController.$injection = ['$scope', '$filter'];
    function MsgController($scope, $filter){
        
        $scope.name = "Daniel";
        $scope.sayMessage = function(){
            var msg = "Daniel likes to eat healthy snacks at night!"
            return $filter('uppercase')(msg);
        };

        $scope.stateOfBeing = "hungry";
        $scope.feedDaniel = function(){
            if($scope.stateOfBeing === "hungry"){
                $scope.stateOfBeing = "eating";
            }else{
                $scope.stateOfBeing = "hungry";
            }
        };

    };
})();