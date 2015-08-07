angular
	.module('angular-admin',[
	'ui.router',
	'ngAnimate',
	'ngMaterial'
	])
	.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/login');

		$stateProvider
		.state('login',{
			url : '/login',
			templateUrl : 'views/login.html'
		});
	});