export default class HomeSvc {
    
    constructor( $http ) {
        this.$http = $http;
    }

    fetchData() {
        return this.$http.get( '/api/faker' );
    }
}

HomeSvc.$inject = ['$http'];