app.controller('personCtrl', function($scope){
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.myVar = false;
    $scope.fullName = function(){
        return $scope.firstName + ' ' + $scope.lastName;
    };
    $scope.toggle = function(){
        $scope.myVar = !$scope.myVar;
    };
});