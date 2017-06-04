class HomeCtrl {
  constructor(ApiService, DataService, $routeParams) {
    this.apiService = ApiService;
    this.dataService = DataService;
    this.isDisabled = false;
    this.changeView = false;
    this.calendarView = true;
    this.data = false;
    this.days = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ];
    this.id = $routeParams.id;

    ApiService.fetchData().then((data) => {
      this.data = data.data;
    });
  }

  generateSchedule() {
    this.isDisabled = true;

    this.apiService.generateData().then((data) => {
      this.data = data.data;
    }).then(() => {
      this.calendar = this.data;
      this.marginFirst = `margin-left:${this.data[0].dayOfTheWeek * 120}px`;
      this.isDisabled = false;
      this.changeView = true;
    });
  }

  onChangeView() {
    this.calendarView = !this.calendarView;
  }

  getNurse(id) {
    return this.dataService.getNurse(id);
  }

  getNurseInitials(id) {
    const nurse = this.getNurse(id);

    return `${nurse.firstName[0]}${nurse.surname[0]}`;
  }

  getDay() {
    return this.data[this.id];
  }
}

HomeCtrl.$inject = ['ApiService', 'DataService', '$routeParams'];

export default HomeCtrl;
