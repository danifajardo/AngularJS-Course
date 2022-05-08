(function (){
    angular.module("MsgApp", [])
    .controller("MsgController", MsgController);

    MsgController.$injection = [$scope];
    function MsgController($scope){
        $scope.name = "Daniel";
        $scope.sayMessage = function(){
            return "Daniel likes to eat healthy snacks at night!";
        };
        $scope.stateOfBeing = "hungry";
        $scope.feedDaniel = function(){
            if($scope.stateOfBeing === "hungry"){
                $scope.stateOfBeing = "eating";
            }
        };
    };
})();