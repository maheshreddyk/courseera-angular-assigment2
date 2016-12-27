(function(module){


  var ToBuyController = function(shoppingListService)
  {
    var model = this;
    model.items = shoppingListService.toBuyItems;
    model.buyItem = function(index){
      shoppingListService.buyItem(index);
    }


  }

  ToBuyController.$inject = ['shoppingListService'];
  module.controller('ToBuyController', ToBuyController);

}(angular.module('shoppingApp')));
