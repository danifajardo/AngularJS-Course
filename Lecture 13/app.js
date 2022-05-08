(function (){
    angular.module("MsgApp", [])
    .controller("MsgController", MsgController)
    .filter("loves", LovesFilter); //add the custom filter to angular

    MsgController.$injection = ['$scope', 'lovesFilter']; //inject the new custom filter
    function MsgController($scope, lovesFilter){
        
        $scope.name = "Daniel";
        $scope.sayMessage = function(){
            var msg = "Daniel likes to eat healthy snacks at night!"
            return msg;
        };

        $scope.sayLovesMessage = function(){
            var msg = "Daniel likes to eat healthy snacks at night!"
            msg = lovesFilter(msg);
            return msg;
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

    function LovesFilter(){
        return function (input){
            input = input || ""; //make sure that input exist
            input = input.replace("likes", "loves"); //replace some especific word
            return input;
        };
    };

})();