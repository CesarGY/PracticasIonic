
angular.module('starter').controller('mainController', function($scope, $ionicPopup){

	$scope.message ="Hola primo";

	$scope.showAlert = function() {
		var alertPopup = $ionicPopup.alert({
	       	title: 'Mi aplicación',
       		template: 'Bienvenido Cesar'
     	});
   };
});
