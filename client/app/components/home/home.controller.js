let HomeController = ($scope, $state) => {
  $scope.title = 'Play Outside';
  $scope.goToActivities = function(){
  $state.go('activity');
  };

};

HomeController.$inject = ['$scope', '$state'];

export {HomeController};


