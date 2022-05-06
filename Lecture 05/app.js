(function(){

    angular.module('myFirstApp', []) //first parameter: name of the module, second parameter dependencies
    .controller('myFirstController', function ($scope){ //first parameter: name of controller, second parameter a function
        $scope.name = "Daniel Fajardo"; //new property of $scope
        $scope.sayHello = function(){ //function using a scope
            return "Hello " + $scope.name;
        }
    }); 
})();