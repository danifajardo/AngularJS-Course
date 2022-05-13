(function (){
    angular.module("ShoppingListAsApp", [])
    .controller("ShoppingListAddController", ShoppingListAddController)
    .controller("ShoppingListShowController", ShoppingListShowController)
    .controller("ShoppingListRemoveController", ShoppingListRemoveController)
    .service("ShoppingListService", ShoppingListService);

    ShoppingListAddController.$inject = ['ShoppingListService'];
    function ShoppingListAddController(ShoppingListService){
        var itemAdder = this;
        itemAdder.itemName = "";
        itemAdder.itemQuantity = "";

        itemAdder.addItem = function (){
            ShoppingListService.addItem(itemAdder.itemName,itemAdder.itemQuantity);
        };
    };

    ShoppingListShowController.$inject = ['ShoppingListService'];
    function ShoppingListShowController (ShoppingListService){
        var showList = this;
        showList.items = ShoppingListService.getItems();
    };

    ShoppingListRemoveController.$inject = ['ShoppingListService'];
    function ShoppingListRemoveController (ShoppingListService){
        var removeItem = this;
        removeItem.id = "";
        removeItem.removeItemId = function(){
            ShoppingListService.removeItems(parseInt(removeItem.id));
        };    
    };

    function ShoppingListService(){
        var service = this;
        //list of shopping items
        var items = [];

        service.addItem = function(name, quantity){
            var item = {
                name: name,
                quantity: quantity
            };
            items.push(item);
        };

        service.getItems = function(){
            return items;
        };

        service.removeItems = function(id){
           if (id > 0 && items.length > 0){
               items.splice(id-1,1);
           };
           console.log(items);
        };
    };

})();