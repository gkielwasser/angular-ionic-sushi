angular.module('sushi.controllers', [])

  .controller('mainCtrl', ['$scope', '$state', function ($scope, $state) {
    $scope.navTitle = '<img class="title-image" src="images/sushimontblanc.jpg" />';

    $scope.go = function (state) {
      $state.go(state);
    }
  }])

// A simple controller that fetches a list of data from a service
  .controller('CategoriesCtrl', ['$scope', 'CategoryService', function ($scope, CategoryService) {
    // service returning mock data (services.js)
    $scope.categories = CategoryService.all();
  }])

  .controller('IngredientsCtrl', ['$scope', 'CategoryService', '$filter', '$ionicScrollDelegate', function ($scope, CategoryService, $filter, $ionicScrollDelegate) {
    $scope.filteredItems = CategoryService.getAllItems();
    $scope.ingredients = CategoryService.getAllIngredients();

    $scope.updateItems = function (checked) {
      //Optimisation: ne pas filter si l'on check & plus qu'un item disponible
      if (!checked || ($scope.filteredItems.length > 1 && checked)) {
        //Optimisation: ne rechercher que dans les filtrers si le filtre est plus précis
        if (checked) {
          $scope.filteredItems = $filter('ingredientsFilter')($scope.filteredItems, $scope.ingredients);
        }
        else {
          $scope.filteredItems = $filter('ingredientsFilter')(CategoryService.getAllItems(), $scope.ingredients);
        }

        console.log("checked", checked);
        $ionicScrollDelegate.scrollTop();
      }
      else {
        console.log("ignore")
      }
    }

    $scope.isIngredient = function (ing) {
      var res = false;

      angular.forEach($scope.filteredItems, function (item) {

        angular.forEach(item.components, function (ingredient) {

          if (ingredient == ing) {
            res = true;
          }
        })
      });
      return res;
    }
  }])

  .controller('CartTabCtrl', ['$scope', 'CartService', '$animate', function ($scope, CartService, $animate) {
    $scope.getAnim = function () {

    }
    $scope.$watch(CartService.count, function (value, oldValue) {

      $scope.itemsNumber = value;
      // $animate.addClass(element.parent().s(),'pulse',function() {// $animate.removeClass(element, 'pulsate')});

    })

  }])

  .directive('pulsing', ['$animate', function ($animate) {
    return{
      link: function (scope, element, attrs) {
        scope.$watch('itemsNumber', function (newVal, oldVal) {
          //var span = angular.element(angular.element(element.parent().children()[0]).children()[1]).children()[0]));
          console.log("watcher called", element);
          if (newVal != oldVal) {
            //start the animation!
            console.log('counter changed');
            $animate.addClass(element.parent().s(), 'pulse', function () {
              // $animate.removeClass(element, 'pulsate')
            });
          }
        })
      }
    }
  }]).animation('.pulse', function () {
    var getScope = function (e) {
      return angular.element(e).scope();
    };

    return {
      addClass: function (element, className, done) {
        console.log("element", element)
      },
      removeClass: function (element, className, done) {

      }
    }
  })

  .controller('CommandTimeCtrl', ['$scope', function ($scope) {
    $scope.days = ['Aujourdhui', 'Lundi 20 mars', 'Mardi 21 mars', 'Mercredi 22 mars', 'Jeudi 23 mars'];
    $scope.hours = ['Maintenant', '18:00', '18:15', '18:30', '18:45', '19:00']
    $scope.command = {
      day: $scope.days[0],
      time: $scope.hours[0]
    }
  }])

  .controller('FinishCtrl', ['$scope', '$ionicPopup', 'CartService', function ($scope, $ionicPopup, CartService) {

    $scope.showConfirm = function () {
      $ionicPopup.alert({
        title: 'Fin',
        content: 'Démonstration terminée. Le Panier va être supprimé.'
      }).then(function () {
          CartService.reset();
          $scope.go('tab.categories');
        })
    };

  }])

  .controller('ClientDataCtrl', ['$scope', function ($scope) {


  }])

// A simple controller that shows a tapped item's data
  .controller('CategoryCtrl', ['$scope', '$stateParams', 'CategoryService', 'CartService', '$state', function ($scope, $stateParams, CategoryService, CartService, $state) {

    $scope.category = CategoryService.get($stateParams.categoryId);

    $scope.loadItem = function (id) {
      $state.go('tab.item-detail', {categoryId: $stateParams.categoryId, itemId: id});
    }

    $scope.addItem = function (item) {
      if (!item.quantity || item.quantity == 0)  item.quantity = 1;
      var add = angular.copy(item);
      CartService.addItem(add);
      item.quantity = 0;
    }
  }])

  .controller('ItemCtrl', ['$scope', '$stateParams', 'CategoryService', 'CartService', '$state', function ($scope, $stateParams, CategoryService, CartService, $state) {
    $scope.categoryLabel = CategoryService.getCategory($stateParams.categoryId);

    $scope.item = CategoryService.getItem($stateParams.categoryId, $stateParams.itemId);

    $scope.addItem = function (item) {
      if (!item.quantity || item.quantity == 0)  item.quantity = 1;
      var add = angular.copy(item);
      CartService.addItem(add);
      item.quantity = 0;
    }

    $scope.loadItem = function (item) {
      $state.go('tab.item-detail', {categoryId: item.category, itemId: item.id});
    }
  }])

  .controller('CartCtrl', ['$scope', 'CartService', '$state', function ($scope, CartService, $state) {
    $scope.$watch(CartService.getItems, function (value) {
      console.log("cart items", value)
      $scope.items = value;
    }, true)

    $scope.removeItem = function (id) {
      CartService.removeItem(id);
    }

    $scope.getTotal = function () {
      var total = 0;
      angular.forEach($scope.items, function (item) {
        total += item.quantity * item.price;
      })
      return total;
    }

  }]);
