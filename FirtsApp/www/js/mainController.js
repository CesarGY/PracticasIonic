
angular.module('starter').controller('mainController', function($scope,$state, $ionicPopup){

	$scope.message ="Hola primo";
	$scope.form={};
	$scope.showAlert = function() {
		var alertPopup = $ionicPopup.alert({
	       	title: 'Mi aplicación',
       		template: 'Bienvenido Cesar'
     	});

     	console.log($scope.form);

		
   };
});
