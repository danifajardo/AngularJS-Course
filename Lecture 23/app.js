(function(){
    'use strict';

    angular.module("ShoppingListApp", [])
    .controller("ShoppingListController", ShoppingListController)
    .provider("ShoppingListService", ShoppingListServiceProvider)
    .config(Config);

    ShoppingListController.$inject = ["ShoppingListService"];
    function ShoppingListController(ShoppingListService){
        var list = this;

        list.items = ShoppingListService.getItems();

        list.itemName = "";
        list.itemQuantity = "";

        list.addItem = function(){
            try {
                ShoppingListService.addItem(list.itemName,list.itemQuantity);
            } catch (error) {
                list.errorMessage = error.message;
            }
        };

        list.removeItem = function(itemId){
            ShoppingListService.removeItem(itemId);
        };
    };

    Config.$inject = ["ShoppingListServiceProvider"];
    function Config(ShoppingListServiceProvider){
        ShoppingListServiceProvider.defaults.maxItems = 2; 
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
    };

    function ShoppingListServiceProvider(){
        var provider = this;

        provider.defaults = {
            maxItems: 10
        };

        provider.$get = function(){
            var shoppingList = new ShoppingListService(provider.defaults.maxItems);

            return shoppingList;
        };
    };
})();