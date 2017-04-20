angular.module('app')
    .directive('nsCalendarDay', function(){

    return{
        restrict: 'EA',
        templateUrl: 'calendar_day.html',
        scope:{
            dayNumber: '@'
        }
    };
    
});