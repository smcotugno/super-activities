var dbCredentials = {
	dbName : 'super-activities-db'
};

// var db;
// var cloudant;

function initDBConnection() {
	
	if (process.env.VCAP_SERVICES) {
		var vcapServices = JSON && JSON.parse(process.env.VCAP_SERVICES) || $.parseJSON(process.env.VCAP_SERVICES);
//		JSON.parse(process.env.VCAP_SERVICES);
		// Pattern match to find the first instance of a Cloudant service in
		// VCAP_SERVICES. If you know your service key, you can access the
		// service credentials directly by using the vcapServices object.
		for (var vcapService in vcapServices){
			if (vcapService.match(/cloudant/i)){
				dbCredentials.host = vcapServices[vcapService][0].credentials.host;
				dbCredentials.port = vcapServices[vcapService][0].credentials.port;
				dbCredentials.user = vcapServices[vcapService][0].credentials.username;
				dbCredentials.password = vcapServices[vcapService][0].credentials.password;
				dbCredentials.url = vcapServices[vcapService][0].credentials.url;
				
//				cloudant = require('cloudant')(dbCredentials.url);
				
				// check if DB exists if not create
//				cloudant.db.create(dbCredentials.dbName, function (err, res) {
//					if (err) { console.log('could not create db ', err); }
//				});
				
//				db = cloudant.use(dbCredentials.dbName);
//				console.log('using cloudant database ', dbCredentials.dbName);
				console.log('using cloudant database from service ', vcapServices[vcapService][0].name);
				break;
			}
		}
		if(db==null){
			console.warn('Could not find Cloudant credentials in VCAP_SERVICES environment variable - data will be unavailable to the UI');

		}
	} else{
		console.warn('VCAP_SERVICES environment variable not set - data will be unavailable to the UI');
		// For running this app locally you can get your Cloudant credentials 
		// from Bluemix (VCAP_SERVICES in "cf env" output or the Environment 
		// Variables section for an app in the Bluemix console dashboard).
		// Alternately you could point to a local database here instead of a 
		// Bluemix service.
		
		// from the DEV creds
		dbCredentials.host = "ed939949-f653-4827-80d7-b337bff5fdbc-bluemix.cloudant.com";
		dbCredentials.port = 443;
		dbCredentials.user = "ed939949-f653-4827-80d7-b337bff5fdbc-bluemix";
		dbCredentials.password = "39ed55d43de58e4027705af1b65c1f30e5039e3a41a930655f3498ec382a6586";
		dbCredentials.url = "https://ed939949-f653-4827-80d7-b337bff5fdbc-bluemix:39ed55d43de58e4027705af1b65c1f30e5039e3a41a930655f3498ec382a6586@ed939949-f653-4827-80d7-b337bff5fdbc-bluemix.cloudant.com";
	}
}

let ActivityController = ($scope, $state, $http, theCurrentActivity) => {

	$scope.myActivity = theCurrentActivity;
	
	initDBConnection();

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
		    name: 'Cricket',
		    description: 'This is a description of Cricket',
		    points: 18
		  };

	$scope.sampleActivity6 = {
		    name: 'Darts',
		    description: 'This is a description of Darts',
		    points: 33
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

	var myUrl = dbCredentials.url + "/" + dbCredentials.dbName + "/_all_docs/?include_docs=true";
	console.log('myURL = ', myUrl);
	$http.get(myUrl).then(function (response) {
	   $scope.myData = response.data;
	});
	
};

ActivityController.$inject = ['$scope', '$state', '$http', 'theCurrentActivity'];

export {ActivityController};


