import angular from 'angular';
import ApplicationController from './controllers/application.ctrl';
import ApplicationService from './services/application.svc';
import nsCalendarDay from './directives/calendar_day/calendar_day';

angular.module('app', [])
  .controller('ApplicationController', ApplicationController)
  .service('ApplicationService', ApplicationService)
  .directive('nsCalendarDay', nsCalendarDay);