angular.module('wseries').controller('BuscaController', function ($scope, $http) {
    
	$scope.series={};
	
    $scope.busca=function(){
	
		if($scope.serie!=undefined){
			
				// busca as séries pelo nome
				 $http.get('http://api.tvmaze.com/search/shows?q='+$scope.serie)
				.success(function (cont) {
					console.log(cont)
					$scope.series=cont;
					
				})
				.error(function (erro) {
					console.log(erro);
				});
			
			}
	
	};
	
	
			
			
			
     
			

});
