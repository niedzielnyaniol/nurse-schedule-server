class HomeCtrl {
  constructor(HomeSvc) {
    this.HomeSvc = HomeSvc;
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

    this.HomeSvc.fetchData()
      .then((data) => {
        this.isDisabled = false;
        this.calendar = data.data;
        this.marginFirst = `margin-left:${data.data[0].dayOfTheWeek * 120}px`;
      });
  }
}

HomeCtrl.$inject = ['HomeSvc'];

export default HomeCtrl;
