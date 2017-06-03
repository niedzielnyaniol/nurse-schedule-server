import angular from 'angular';
import ngRoute from 'angular-route';

import HomeCtrl from './controllers/home.ctrl';
import DaysCtrl from './controllers/days.ctrl';

import ApiService from './services/api.service';
import DataService from './services/data.service';

import NsCalendarDay from './directives/calendar_day/calendar_day';
import NsShiftsDay from './directives/shifts_day/shifts_day';

import routing from './config/app.config';
import config from './config/config';

angular.module('app', [
  ngRoute,
  config
]).controller('HomeCtrl', HomeCtrl)
  .controller('DaysCtrl', DaysCtrl)
  .service('ApiService', ApiService)
  .service('DataService', DataService)
  .directive('nsCalendarDay', () => new NsCalendarDay())
  .directive('nsShiftsDay', () => new NsShiftsDay())
  .config(routing);
