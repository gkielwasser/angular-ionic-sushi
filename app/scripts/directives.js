angular.module('sushi.directives', [])

  .directive('quantity', function (CartService) {
    return {
      restrict: 'E',
      scope: {
        item: '=',
        cart: '=' //affect le local storage directement
      },
      replace: true,
      templateUrl: '/partials/quantity.html',
      controller: function ($scope) {
        if ($scope.item) {
          if (!$scope.item.quantity)  $scope.item.quantity = 0;

          $scope.upQuantity = function () {
            if ($scope.cart) {
              CartService.upQuantity($scope.item.id);
            }
            else {
              $scope.item.quantity++;
            }
          }

          $scope.downQuantity = function () {
            if ($scope.cart) {
              CartService.downQuantity($scope.item.id);
            }
            else {
              if ($scope.item.quantity > 0) $scope.item.quantity--;
            }
          }
        }
      }
    }
  })

