// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.services', 'starter.controllers','LocalStorageModule'])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    .state('accueil', {
      url: "/",
      templateUrl:"partials/accueil.html"
    })

    .state('command', {
      url: "/command",
      abstract: true,
      templateUrl: "partials/tabs-command.html"
    })

    .state('command.location', {
      url: '/location',
      views: {
        'command-tab-location': {
          templateUrl: 'partials/command-location.html'
        }
      }
    })

    .state('command.time', {
      url: '/time',
      views: {
        'command-tab-time': {
          templateUrl: 'partials/command-time.html',
          controller: 'CommandTimeCtrl'
        }
      }
    })

    .state('command.client', {
      url: '/client',
      views: {
        'command-tab-client': {
          templateUrl: 'partials/command-client.html'
        }
      }
    })

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "partials/tabs.html"
    })

    .state('tab.categories', {
      url: '/categories',
      views: {
        'categories-tab': {
          templateUrl: 'partials/categories.html',
          controller: 'CategoriesCtrl'
        }
      }
    })

    .state('tab.category', {
      url: '/categories/:categoryId',
      views: {
        'categories-tab': {
          templateUrl: 'partials/category.html',
          controller: 'CategoryCtrl'
        }
      }
    })

    .state('tab.item-detail', {
      url: '/categories/:categoryId/:itemId',
      views: {
        'categories-tab': {
          templateUrl: 'partials/item-detail.html',
          controller: 'ItemCtrl'
        }
      }
    })

    .state('tab.panier', {
      url: '/panier',
      views: {
        'cart-tab': {
          templateUrl: 'partials/panier.html',
          controller: 'CartCtrl'
        }
      }
    })

    .state('tab.boutiques', {
      url: '/boutiques',
      views: {
        'boutiques-tab': {
          templateUrl: 'partials/boutiques.html'
        }
      }
    })

    .state('tab.adopt', {
      url: '/adopt',
      views: {
        'adopt-tab': {
          templateUrl: 'partials/adopt.html'
        }
      }
    })

    .state('tab.about', {
      url: '/about',
      views: {
        'about-tab': {
          templateUrl: 'partials/about.html'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

})

  .directive('quantity',function(CartService) {
    return {
      restrict:'E',
      scope: {
        item:'=',
        cart:'=' //affete le local storage directement
      },
      replace:true,
      templateUrl:'/partials/quantity.html',
      controller: function($scope){

        if(!$scope.item.quantity)  $scope.item.quantity = 0;

        $scope.upQuantity = function(){
          if($scope.cart){
            CartService.upQuantity($scope.item.id);
          }
          else{
            $scope.item.quantity ++;
          }
        }

        $scope.downQuantity = function(){
          if($scope.cart){
            CartService.downQuantity($scope.item.id);
          }
          else{
            if($scope.item.quantity > 0) $scope.item.quantity --;
          }
        }
      }
    }
  })

