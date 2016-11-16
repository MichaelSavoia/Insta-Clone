(function() {

angular
.module('app', ['ui.router'])
.config(appConfig);

appConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

	function appConfig($stateProvider, $urlRouterProvider, $locationProvider)
	{

		// if state cannot be found, redirects to 404 state
		$urlRouterProvider.otherwise('/404');

		$stateProvider

			// home state
			.state('home', {
				url: '/',
				views: {
					'content': {
						templateUrl: 'partials/home.html',
						controller: 'picController',
						controllerAs: 'controller'
					}
				}
			})

			// new image state
			.state('newPage', {
				url: '/new',
				views: {
					'content': {
						templateUrl: 'partials/new.html',
						controller: 'picController',
						controllerAs: 'controller'
					}
				}
			})

			// image details state
			.state('detailsPage', {
				url: '/details/:_id',
				views: {
					'content': {
						templateUrl: 'partials/details.html',
						controller: 'singlePicController',
						controllerAs: 'controller'
					}
				}
			})

			// 404 state
			.state('error', {
				url: '/404',
				views: {
					'content': {
						templateUrl: 'partials/404.html',
					}
				}

			})
	}
})();