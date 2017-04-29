import angular from 'angular';
import ApplicationController from './controllers/application.ctrl';
import ApplicationService from './services/application.svc';

angular.module('app', [])
  .controller('ApplicationController', ApplicationController)
  .service('ApplicationService', ApplicationService);