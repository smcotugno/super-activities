function theCurrentActivity() {
  let currentActivity = {
    name: '',
    description: '',
    points: 0
  };

  let isActive = false;

  return {
    set: function(theActivity) {
      currentActivity = theActivity;
    },
    setActive: function() {
      isActive = true;
    },
    setInActive: function() {
      isActive = false;
    },
    isActive: function() {
      return isActive;
    },
    isNotActive: function() {
      return (!isActive);
    },
    name: function() {
      return currentActivity.name;
    },
    description: function() {
      return currentActivity.description;
    },
    points: function() {
      return currentActivity.points;
    }
  };
}

let ActivityController = ($scope, $state) => {

  $scope.myActivity = theCurrentActivity();

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

  $scope.goToActivityDetails = function goToActivityDetails(num) {
     // populate object
    if ( num === 1 ) {
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

};

ActivityController.$inject = ['$scope', '$state'];

export {ActivityController, theCurrentActivity};


