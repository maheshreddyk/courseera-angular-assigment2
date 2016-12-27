(function(module){

  var shoppingListService = function()
  {

    var boughtItems = [];

     var toBuyItems = [{name: "cookies", quantity: 10 },
                 {name: "chips", quantity: 2 },
                 {name: "choclates", quantity: 15 },
                 {name: "cakes", quantity: 5 },
                 {name: "sweets", quantity: 3 }];


    var buyItem = function(index){
      boughtItems.push(toBuyItems[index]);
      toBuyItems.splice(index,1);
    };

    return {
      boughtItems :boughtItems,
      toBuyItems :toBuyItems,
      buyItem :buyItem
    };

  }


 module.factory('shoppingListService', shoppingListService);

}(angular.module('shoppingApp')));
