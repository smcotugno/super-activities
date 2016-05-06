let DetailsController = ($scope, $state) => {
  let currentActivity = function (activity) {
    return {
      name: activity.name,
      details: activity.details,
      points: activity.points,
      isActive: false
    };
  };

  //TODO: Replace these with the proper references, if we come up with those
  $scope.currentActivity = currentActivity({
    name: 'Basketball',
    details: 'Ball, Hoop, Court',
    points: 40
  });

  //$scope.isCurrent = false;
  $scope.start = function start() {
      $scope.currentActivity.isCurrent = true;
  };
  $scope.cancel = function cancel() {
    $scope.currentActivity.isCurrent = false;
    $state.go('home');
  };

  $scope.done = function done() {
    $scope.currentActivity.isCurrent = false;
    $state.go('points');
  };
};
DetailsController.$inject = ['$scope', '$state'];

export {DetailsController};


//let $scope.someActivity =
//{
 // inProgress: false
//};
