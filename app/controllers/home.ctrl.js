class HomeCtrl {
  constructor(ApiService) {
    this.apiService = ApiService;
    this.isDisabled = false;
    this.changeView = false;
    this.calendarView = true;
    this.days = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ];

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
}

HomeCtrl.$inject = ['ApiService'];

export default HomeCtrl;
