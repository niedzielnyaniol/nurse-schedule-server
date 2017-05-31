import angular from 'angular';
import ngRoute from 'angular-route';
import HomeCtrl from './controllers/home.ctrl';
import HomeSvc from './services/home.svc';
import NsCalendarDay from './directives/calendar_day/calendar_day';
import routing from './config/app.config';
import NurseCtrl from './controllers/nurse.ctrl';

angular.module('app', [
  ngRoute
]).controller('HomeCtrl', HomeCtrl)
  .controller('NurseCtrl', NurseCtrl)
  .service('HomeSvc', HomeSvc)
  .directive('nsCalendarDay', () => new NsCalendarDay())
  .config(routing);
