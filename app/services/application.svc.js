angular.module('app')
    .service('ApplicationService', function($http){

    this.fetchData = function(){
        return $http.get('/api/faker');
    }         
});