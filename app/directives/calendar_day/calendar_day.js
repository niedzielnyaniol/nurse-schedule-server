export default class nsCalendarDay {
  constructor() {
    this.restrict = 'EA',
    this.templateUrl = 'calendar_day.html',
    this.scope = {
        dayNumber: '@'
    }
  }
}
// angular.module('app')
//     .directive('nsCalendarDay', function(){

//     return{
//         restrict: 'EA',
//         templateUrl: 'calendar_day.html',
//         scope:{
//             dayNumber: '@'
//         }
//     };
// });