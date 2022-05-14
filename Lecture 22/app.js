(function(){
    'use strict';

    angular.module("ControllerAsApp", [])
    .controller("ShoppingListController1", ShoppingListController1)
    .controller("ShoppingListController2", ShoppingListController2)
    .factory("ShoppingListFactory",ShoppingListFactory);

    ShoppingListController1.$inject = ['ShoppingListFactory'];
    function ShoppingListController1(ShoppingListFactory){
        var list1 = this;

        //use factory to create new shopping list service
        var shoppingList = ShoppingListFactory();

        list1.items = shoppingList.getItems();

        list1.itemName = "";
        list1.itemQuantity = "";

        list1.addItem = function(){
            try {
                shoppingList.addItem(list1.itemName,list1.itemQuantity);
            } catch (error) {
                list1.errorMessage = error.message;
            }
        };

        list1.removeItem = function(itemId){
            shoppingList.removeItem(itemId);
        };
    };

    ShoppingListController2.$inject = ['ShoppingListFactory'];
    function ShoppingListController2(ShoppingListFactory){
        var list2 = this;

        //use factory to create new shopping list service
        var shoppingList = ShoppingListFactory(3);

        list2.items = shoppingList.getItems();

        list2.itemName = "";
        list2.itemQuantity = "";

        list2.addItem = function(){
            try {
                shoppingList.addItem(list2.itemName,list2.itemQuantity);
            } catch (error) {
                list2.errorMessage = error.message;
            }
        };

        list2.removeItem = function(itemId){
            shoppingList.removeItem(itemId);
        }
    };


    //Factory of services
    function ShoppingListFactory(){
        var factory = function(maxitems){
            return new ShoppingListService(maxitems);
        }
        return factory;
    };

    //Service
    function ShoppingListService(maxItems){
        var service = this;

        //list of items
        var items = [];

        service.addItem = function(name, quantity){
            if((maxItems === undefined) || ((maxItems !== undefined) && (items.length < maxItems))){
                var item = {
                    name: name,
                    quantity: quantity
                };
                items.push(item);
                console.log(items);
            }else{
                throw new Error("Max items (" + maxItems + ") reached."); 
            }
        };

        service.removeItem = function(itemId){
            items.slice(itemId,1);
        };

        service.getItems = function(){
            return items;
        };
    }

})();