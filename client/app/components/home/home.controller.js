let HomeController = ($scope, $state) => {
  $scope.title = 'Play Outside';
  $scope.goTo = function(state){
  $state.go(state);
  };

};

HomeController.$inject = ['$scope', '$state'];

export {HomeController};


