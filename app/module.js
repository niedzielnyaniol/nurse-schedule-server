import angular from 'angular';
import ngRoute from 'angular-route';

import HomeCtrl from './controllers/home.ctrl';
import DaysCtrl from './controllers/days.ctrl';

import ApiService from './services/api.service';

import NsCalendarDay from './directives/calendar_day/calendar_day';
import NsShiftsDay from './directives/shifts_day/shifts_day';

import routing from './config/app.config';

angular.module('app', [
  ngRoute
]).controller('HomeCtrl', HomeCtrl)
  .controller('DaysCtrl', DaysCtrl)
  .service('ApiService', ApiService)
  .directive('nsCalendarDay', () => new NsCalendarDay())
  .directive('nsShiftsDay', () => new NsShiftsDay())
  .config(routing);
