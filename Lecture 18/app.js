(function (){
   'use strict';
   
    var shoppingList1 = ["Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (cookie flavor)"];

    var shoppingList2 = [
        {
            name: "Milk",
            quantity: "2"
        },
        {
            name: "Donuts",
            quantity: "200"
        },
        {
            name: "Cookies",
            quantity: "300"
        },
        {
            name: "Chocolate",
            quantity: "5"
        }
    ];

    angular.module("ShopingListApp", [])
   .controller("ShoppingListController", ShoppingListController);
   
   ShoppingListController.$inject = ['$scope'];
   function ShoppingListController($scope){
    $scope.shoppingList1 = shoppingList1;
    $scope.shoppingList2 = shoppingList2;
    $scope.itemName = "";
    $scope.itemQuantity = "";

    $scope.addItemToList = function (){
        var empty = validateParameters($scope.itemName, $scope.itemQuantity);
        var itemFormat = {
            name: "",
            quantity: ""
        }
        if (empty != 0){
            itemFormat.name = $scope.itemName;
            itemFormat.quantity = $scope.itemQuantity;
            shoppingList2.push(itemFormat);
        }
    };
   };

   function validateParameters(name, quantity){
       if (name != "" && quantity != ""){
           return 1;
       }else{
           return 0;
       }
   };

})();