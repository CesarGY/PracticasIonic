angular.module('starter').controller('Page2Controller',function($scope,$ionicHistory,$stateParams){
	$scope.back = function(){
		$ionicHistory.goBack(-1);
	}

	$scope.params = $stateParams;
});