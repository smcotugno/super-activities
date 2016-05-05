let PointsController = ($scope, $state) => {
  $scope.goToHome = function goToHome() {
    $state.go('home');
  };
};

PointsController.$inject = ['$scope', '$state'];

export {PointsController};


