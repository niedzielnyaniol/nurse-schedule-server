import angular from 'angular';
import ApplicationController from './controllers/application.ctrl';
import ApplicationService from './services/application.svc';
import nsCalendarDay from './directives/calendar_day/calendar_day';
import routing from './config/app.config';
import ngRoute from 'angular-route';

angular.module( 'app', [
    ngRoute
  ] )
  .controller( 'ApplicationController', ApplicationController )
  .service( 'ApplicationService', ApplicationService )
  .directive( 'nsCalendarDay', () => new nsCalendarDay() )
  .config( routing );