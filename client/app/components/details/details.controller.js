let DetailsController = ($scope, $state, theCurrentActivity) => {
  $scope.currentActivity = theCurrentActivity;

  $scope.start = function start() {
      $scope.currentActivity.setActive();
  };
  $scope.cancel = function cancel() {
    $scope.currentActivity.setInActive();
    $state.go('home');
  };

  $scope.done = function done() {
    $scope.currentActivity.setInActive();
    $state.go('points');
  };
};
DetailsController.$inject = ['$scope', '$state', 'theCurrentActivity'];

export {DetailsController};
