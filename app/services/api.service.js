class ApiService {
  constructor($http, DataService) {
    this.dataService = DataService;
    this.$http = $http;
  }

  fetchData() {
    const data = this.$http.get('/api/faker');

    this.dataService.setData(data);

    return data;
  }
}

ApiService.$inject = ['$http', 'DataService'];

export default ApiService;
