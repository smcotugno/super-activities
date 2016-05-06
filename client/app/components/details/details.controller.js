let DetailsController = ($scope, $state) => {
  let currentActivity = function (activity) {
    return {
      name: activity.name,
      description: activity.description,
      points: activity.points,
      isActive: false
    };
  };

  $scope.currentActivity = currentActivity({
    name: 'Basketball',
    description: 'Ball, Hoop, Court',
    points: 40
  });

  $scope.start = function start() {
      $scope.currentActivity.isActive = true;
  };
  $scope.cancel = function cancel() {
    $scope.currentActivity.isActive = false;
    $state.go('home');
  };

  $scope.done = function done() {
    $scope.currentActivity.isActive = false;
    $state.go('points');
  };
};
DetailsController.$inject = ['$scope', '$state'];

export {DetailsController};
