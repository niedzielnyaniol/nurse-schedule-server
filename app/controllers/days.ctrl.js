class DaysCtrl {
  constructor($routeParams) {
    this.dayNumber = $routeParams.id;
  }
}

DaysCtrl.$inject = ['$routeParams'];

export default DaysCtrl;
