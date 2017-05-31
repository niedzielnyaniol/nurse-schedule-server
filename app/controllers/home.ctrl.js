class HomeCtrl {
  constructor(DataService, ApiService) {
    this.apiService = ApiService;
    this.isDisabled = false;
    this.isHidden = false;
    this.days = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ];
  }

  generateSchedule() {
    this.isDisabled = true;

    this.apiService.fetchData()
      .then((data) => {
        this.isDisabled = false;
        this.calendar = data.data;
        this.marginFirst = `margin-left:${data.data[0].dayOfTheWeek * 120}px`;
      });
  }
}

HomeCtrl.$inject = ['DataService', 'ApiService'];

export default HomeCtrl;
