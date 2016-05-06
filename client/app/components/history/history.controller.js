let HistoryController = ($scope, $state) => {
    $scope.goTo = function(state){
    $state.go(state);
  };
  $scope.points = 0;
  $scope.log = {
    'activities': [
      {
        'date': '2016/05/05',
        'name': 'go fly a kite',
        'points': 25
      },
      {
        'date': '2016/05/03',
        'name': 'go play with hoop and ball on blacktop',
        'points': 50
      }
    ]
  };

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

HistoryController.$inject = ['$scope', '$state'];

export {HistoryController};
