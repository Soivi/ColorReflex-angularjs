'use strict';

var colorReflexAngularjsApp = angular
  .module('colorReflexAngularjsApp', [
	"ngRoute", "ngAnimate"
]);

colorReflexAngularjsApp.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl : 'views/main.html',
			})
			.when('/video', {
				templateUrl : 'views/video.html',
			})
			.when('/pictures', {
				templateUrl : 'views/pictures.html',
			})
			.when('/feedback', {
				templateUrl : 'views/feedback.html',
			});
});


colorReflexAngularjsApp.controller('NavigationCtrl', function($scope, $location) {
    $scope.isActive = function(route) {
	if(route === $location.path()) {
		return "selectedMenu";
	} else {
		return "normalMenu";
	}
    }
});

colorReflexAngularjsApp.controller('NavigationCtrl', function($scope, $location) {
    $scope.isActive = function(route) {
	if(route === $location.path()) {
		return "selectedMenu";
	} else {
		return "normalMenu";
	}
    }
});

colorReflexAngularjsApp.controller('PageCtrl', function($scope, $location) {
    $scope.isActive = function() {
	if("/video" === $location.path()) {
		return "videoPage";
	} else if("/pictures" === $location.path()) {
		return "picturePage";
	} else if("/feedback" === $location.path()) {
		return "feedbackPage";
	} else {
		return "mainPage";
	}
    }
});

