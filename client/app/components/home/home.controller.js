let HomeController = ($scope, $state) => {
  $scope.title = 'Super Activities';
  $scope.goTo = function(state){
  $state.go(state);
  };

};

HomeController.$inject = ['$scope', '$state'];

export {HomeController};


