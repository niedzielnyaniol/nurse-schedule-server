class DaysCtrl {
  constructor($routeParams, DataService) {
    this.dayNumber = $routeParams.id;
    this.dataService = DataService;
    this.bla = this.dataService.getDay(this.dayNumber);
  }

  getData() {
    return this.dataService.getDay(this.dayNumber);
  }
}

DaysCtrl.$inject = ['$routeParams', 'DataService'];

export default DaysCtrl;
