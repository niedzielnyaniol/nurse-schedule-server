import angular from 'angular';
import HomeCtrl from './controllers/home.ctrl';
import HomeSvc from './services/home.svc';
import nsCalendarDay from './directives/calendar_day/calendar_day';
import routing from './config/app.config';
import ngRoute from 'angular-route';

angular.module( 'app', [
    ngRoute
  ] )
  .controller( 'HomeCtrl', HomeCtrl )
  .service( 'HomeSvc', HomeSvc )
  .directive( 'nsCalendarDay', () => new nsCalendarDay() )
  .config( routing );