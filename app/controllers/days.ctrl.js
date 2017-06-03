class DaysCtrl {
  constructor($routeParams, ApiService, DataService) {
    this.dataService = DataService;
    this.dayNumber = $routeParams.id;

    ApiService.fetchData().then((data) => {
      this.data = data.data[this.dayNumber];
    });
  }

  getNurse(id) {
    return this.dataService.getNurse(id);
  }
}

DaysCtrl.$inject = ['$routeParams', 'ApiService', 'DataService'];

export default DaysCtrl;
