angular.module('wseries',['ngRoute'])

 .config(function($routeProvider, $locationProvider){
		$locationProvider.html5Mode(true);
		$routeProvider.when('/busca',{
			templateUrl:'partials/busca.html',
			controller:'BuscaController'
		});	
		$routeProvider.when('/resultado',{
			templateUrl:'partials/resultado.html'			
		});		
		$routeProvider.otherwise({redirectTo:'/busca'});	
	});

 