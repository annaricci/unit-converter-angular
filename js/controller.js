var unitConverterApp = angular.module('unitConverterApp',[]);

unitConverterApp.controller('MeasurementListCtrl', function ($scope, $http){
	$http.get('json/measurements.json')
		 .then(function(response){
		 	$scope.measurements = response.data.measurements;
		 },
		 function(){
		 	$scope.message = "Unexpected error";
		 });
	
        
}); 

unitConverterApp.controller('UnitListCtrl', function ($scope, $http){
	$scope.$watch('measurement',function(){
		$http.get('json/' + measurement + '.json')
			 .then(function(response){
			 	$scope.units = response.data;
			 },
			 function(){
			 	$scope.message = "Unexpected error";
			 });
	});
});