(function(){
    angular.module('nameCalculatorApp', [])
    .controller('nameCalculatorController', function ($scope){
        $scope.name = "";
        $scope.numericValue = 0;
        
        $scope.assingNewValue = function(){
            var newValueName = countValueName($scope.name);
            $scope.numericValue = newValueName;
        };
        
        function countValueName (string){
            var sum = 0;
            for (let index = 0; index < string.length; index++) {
                sum += string.charCodeAt(index);
            }
            return sum;
        };
    });    
})();