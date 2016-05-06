let HistoryController = ($scope, $state, activityHistory) => {
  $scope.totalPoints = activityHistory.totalPoints();

  $scope.goTo = function(state){
    $state.go(state);
  };

  $scope.test = true;
  $scope.log = activityHistory.log;

  /*
  $http.get('./log.json').then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available

    $scope.log = response;
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.

    //console.log("Error: Log-Get Failed", response);
  });
          */


};

HistoryController.$inject = ['$scope', '$state', 'activityHistory'];

export {HistoryController};
