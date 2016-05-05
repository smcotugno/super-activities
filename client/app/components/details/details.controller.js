let DetailsController = ($scope, $state) => {
  $scope.cancel = function cancel() {
    $state.go('home');
  };

  $scope.done = function done() {
    $state.go('points');
  };
};
DetailsController.$inject = ['$scope', '$state'];

export {DetailsController};


//let $scope.someActivity =
//{
 // inProgress: false
//};
