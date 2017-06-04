const routing = ($routeProvider, $locationProvider) => {
  $routeProvider.when('/', {
    templateUrl: 'home.html',
    controller: 'HomeCtrl',
    controllerAs: 'vm'
  }).when('/nurse/:id', {
    templateUrl: 'nurse.html',
    controller: 'HomeCtrl',
    controllerAs: 'vm'
  }).when('/nurses-info', {
    templateUrl: 'nurses-info.html',
    controller: 'HomeCtrl',
    controllerAs: 'vm'
  }).when('/:id', {
    templateUrl: 'days.html',
    controller: 'HomeCtrl',
    controllerAs: 'vm'
  });

  $locationProvider.html5Mode(true);
  $locationProvider.html5Mode(true).hashPrefix('!');
};

routing.$inject = ['$routeProvider', '$locationProvider'];

export default routing;
