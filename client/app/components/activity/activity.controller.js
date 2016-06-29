// globals for this controller
var myUrl = "https://super-activity-server-dev.mybluemix.net/api/activities";
var myOtherUrl = "https://super-activity-server-dev.eu-gb.mybluemix.net/api/activities";
var urlToUse = myUrl;

var maxBackupCount = 10;
var curBackupCount = 0;

let ActivityController = ($scope, $state, $http, theCurrentActivity) => {

   $scope.myActivity = theCurrentActivity;
   
   $scope.goToDBActivityDetails = function goToDBActivityDetails(activityData) {
	     // populate object
		 $scope.myActivity.set(activityData);
		 $state.go('details');
	   };

	$scope.goToPoints = function goToPoints() {
	    $state.go('points');
	  };

	$scope.goToHome = function goToHome() {
	    $state.go('home');
	  };
	
	if ( urlToUse !== myUrl ) {
		// check backup count
		if ( curBackupCount > maxBackupCount ) {
			// switch back to normal main url in case its up
			urlToUse = myUrl;
			curBackupCount = 0;
			console.log("Switching back to primary url: " + myUrl);
		} else {
			curBackupCount++;
		}
	}
	$http.get(urlToUse).then(function (response) {
		// GET was OK
		var activityList = [];
//		console.log("Total rows = " + response.data.total_rows);
		if ( response.data.total_rows > 0 ) {
	       // build up the structure of data like we need it, should be a list of Activity objects
		   var i = 0;
		   do {
			   activityList[i] = {};
			   activityList[i].name = response.data.rows[i].id;
			   activityList[i].description = response.data.rows[i].description;
			   activityList[i].points = response.data.rows[i].points;
			   i++;
		   } while ( i < response.data.total_rows );
	   }   
	   $scope.myData = activityList;
	}, function (response) {
	    //Second function handles error
		var errorMes = "GET error = " + response.status + ": " + response.statusText;
		console.warn(errorMes);
		if ( response.status == "404" || response.status == "-1" ) {
			// try the other site
			console.warn("Retrying on backup URL: " + myOtherUrl);
			urlToUse = myOtherUrl;
			$http.get(myOtherUrl).then(function (response) {
				// GET was OK
				var activityList = [];
//				console.log("Total rows = " + response.data.total_rows);
				if ( response.data.total_rows > 0 ) {
			       // build up the structure of data like we need it, should be a list of Activity objects
				   var i = 0;
				   do {
					   activityList[i] = {};
					   activityList[i].name = response.data.rows[i].id;
					   activityList[i].description = response.data.rows[i].description;
					   activityList[i].points = response.data.rows[i].points;
					   i++;
				   } while ( i < response.data.total_rows );
			   }   
			   $scope.myData = activityList;
			}, function (response) {
			    //Second function handles error
				var errorMes = "GET from other site, error = " + response.status + ": " + response.statusText;
				console.warn(errorMes);
			});
		}
	});
	
};

ActivityController.$inject = ['$scope', '$state', '$http', 'theCurrentActivity'];

export {ActivityController};


