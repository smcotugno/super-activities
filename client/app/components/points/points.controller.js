let PointsController = ($scope, $state, activityHistory) => {
  $scope.goToHome = function goToHome() {
    $state.go('home');
  };

  $scope.lastActivity = activityHistory.lastActivity();
  $scope.totalPoints = activityHistory.totalPoints();

};

PointsController.$inject = ['$scope', '$state', 'activityHistory'];

export {PointsController};


