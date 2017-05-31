export default function routing($routeProvider, $locationProvider) {
  'ngInject';

  $routeProvider.when('/', {
    templateUrl: 'home.html',
    controller: 'HomeCtrl',
    controllerAs: 'vm'
  }).when('/nurse', {
    templateUrl: 'nurse.html',
    controller: 'NurseCtrl',
    controllerAs: 'vm'
  });

  $locationProvider.html5Mode(true);
  $locationProvider.html5Mode(true).hashPrefix('!');
}
