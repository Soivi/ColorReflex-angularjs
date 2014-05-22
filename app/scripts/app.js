'use strict';

var colorReflexAngularjsApp = angular
  .module('colorReflexAngularjsApp', [
	"ngRoute"
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
