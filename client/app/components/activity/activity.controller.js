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

	$scope.sampleActivity3 = {
	    name: 'Football',
	    description: 'This is a description of Football',
	    points: 60
	  };

	$scope.sampleActivity4 = {
	    name: 'Hockey',
	    description: 'This is a description of Hockey',
	    points: 30
	  };

	$scope.sampleActivity5 = {
		    name: 'Soccer',
		    description: 'This is a description of Soccer',
		    points: 28
		  };

	$scope.sampleActivity6 = {
		    name: 'Bowling',
		    description: 'This is a description of Bowling',
		    points: 11
		  };

	$scope.goToActivityDetails = function goToActivityDetails(parameter1) {
     // populate object
	 //   $scope.myActivity.set(num);
	    if ( parameter1 === '1' ) {
		  $scope.myActivity.set($scope.sampleActivity1);
	    } else if ( parameter1 === '2' ) {
	      $scope.myActivity.set($scope.sampleActivity2);
	    } else if ( parameter1 === '3' ) {
	      $scope.myActivity.set($scope.sampleActivity3);
	    } else if ( parameter1 === '4' ) {
		  $scope.myActivity.set($scope.sampleActivity4);
	    } else if ( parameter1 === '5' ) {
			  $scope.myActivity.set($scope.sampleActivity5);
	    } else {
	      $scope.myActivity.set($scope.sampleActivity6);    	
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


