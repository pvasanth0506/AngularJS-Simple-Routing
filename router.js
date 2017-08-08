sample.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'assets/home.html',
			controller: 'homeCtrl'
		})
		.state('contacts', {
			url: '/contacts',
			templateUrl: 'assets/contacts.html',
			controller: 'contactsCtrl'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'assets/aboutUs.html',
			controller: 'aboutCtrl'
		})
	$urlRouterProvider.otherwise("/home");
}]);

