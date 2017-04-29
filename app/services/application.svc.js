// angular.module('app')
//     .service('ApplicationService', function($http){

//     this.fetchData = function(){
//         return $http.get('/api/faker');
//     }         
// });

export default class ApplicationService {
    
    constructor( $http ) {
        this.$http = $http;
    }

    fetchData() {
        return this.$http.get('/api/faker');
    }
}

ApplicationService.$inject = ['$http'];