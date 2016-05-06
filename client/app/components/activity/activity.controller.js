
let ActivityController = ($scope, $state) => {
  $scope.activity = 'Basketball';
  $scope.points = 50;

  $scope.activity2 = 'Baseball';
  $scope.points2 = 40;

  $scope.goToActivityDetails = function goToActivityDetails() {
     // populate object
    $state.go('details');
  };

  $scope.goToPoints = function goToPoints() {
    // populate object
    $state.go('points');
  };

  $scope.goToHome = function goToHome() {
    // populate object
    $state.go('home');
  };

  $scope.isCurrent = function isCurrent() {
    return false;
  };
};

ActivityController.$inject = ['$scope', '$state'];

export {ActivityController};


