export default class ApplicationService {
    
    constructor( $http ) {
        this.$http = $http;
    }

    fetchData() {
        return this.$http.get( '/api/faker' );
    }
}

ApplicationService.$inject = ['$http'];