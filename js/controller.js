var unitConverterApp = angular.module('unitConverterApp',[]);

unitConverterApp.controller('MeasurementListCtrl', function ($scope, $http){
	$http.get('json/measurements.json')
		 .then(function(response){
		 	$scope.measurements = response.data.measurements;
		 });
}); 
unitConverterApp.controller('UnitListCtrl', function ($scope, $http){
	$http.get('json/' + + '.json')
		 .then(function(response){
		 	$scope.units = response.data;
		 });
});