angular.module('myApp', []).controller('currencyCtrl', function($scope) {
    $scope.quantity = 1;
    $scope.price = 1;
    $scope.total = function(quantity, price){
        return (quantity * price)
    }
});