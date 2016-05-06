let DetailsController = ($scope, $state) => {
  $scope.isCurrent = false;
  $scope.start = function start() {
      $scope.isCurrent = true;
  };
  $scope.cancel = function cancel() {
    $scope.isCurrent = false;
    $state.go('home');
  };

  $scope.done = function done() {
    $scope.isCurrent = false;
    $state.go('points');
  };
};
DetailsController.$inject = ['$scope', '$state'];

export {DetailsController};


//let $scope.someActivity =
//{
 // inProgress: false
//};
