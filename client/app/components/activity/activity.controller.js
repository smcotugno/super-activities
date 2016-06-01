let ActivityController = ($scope, $state, theCurrentActivity) => {

$scope.myActivity = theCurrentActivity;

$scope.sampleActivity1 = {
    name: 'Basketball',
    description: 'This is a description of Basketball',
    points: 50
  };

$scope.sampleActivity2 = {
    name: 'Baseball',
    description: 'This is a description of Baseball',
    points: 40
  };

$scope.goToActivityDetails = function goToActivityDetails(parameter1) {
     // populate object
 //   $scope.myActivity.set(num);
    if ( parameter1 === '1' ) {
	  $scope.myActivity.set($scope.sampleActivity1);
    } else {
      $scope.myActivity.set($scope.sampleActivity2);
    }
    $state.go('details');
  };

$scope.goToPoints = function goToPoints() {
    $state.go('points');
  };

$scope.goToHome = function goToHome() {
    $state.go('home');
  };

  //$http.get("http://localhost:3000/activities").then(function (response) {
  //  $scope.myData = response.data;
  //});
};

ActivityController.$inject = ['$scope', '$state', 'theCurrentActivity'];

export {ActivityController};


