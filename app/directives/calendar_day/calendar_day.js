export default class nsCalendarDay {
  constructor() {
    this.restrict = 'EA',
    this.templateUrl = 'calendar_day.html',
    this.scope = {
        dayNumber: '@'
    }
  }
}