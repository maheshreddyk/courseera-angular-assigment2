(function(module){


  var AlreadyBoughtController  = function(shoppingListService)
  {
    var model = this;

    model.items = shoppingListService.boughtItems;


  }

  AlreadyBoughtController.$inject = ['shoppingListService'];
    module.controller('AlreadyBoughtController', AlreadyBoughtController);

}(angular.module('shoppingApp')));
