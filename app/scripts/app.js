angular.module('sushi', ['ionic', 'sushi.services', 'sushi.controllers', 'sushi.filters', 'sushi.directives', 'LocalStorageModule'])

  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('accueil', {
        url: "/",
        templateUrl: "partials/home.html"
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

      .state('tab.ingredients', {
        url: '/ingredients',
        views: {
          'ingredients-tab': {
            templateUrl: 'partials/ingredients.html',
            controller: 'IngredientsCtrl'
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

      .state('tab.cart', {
        url: '/cart',
        views: {
          'cart-tab': {
            templateUrl: 'partials/cart.html',
            controller: 'CartCtrl'
          }
        }
      })

      .state('tab.boutiques', {
        url: '/shops',
        views: {
          'shops-tab': {
            templateUrl: 'partials/shops.html'
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
    $urlRouterProvider.otherwise('/'); //Home

  })



