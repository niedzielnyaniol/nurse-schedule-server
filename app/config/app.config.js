const routing = ($routeProvider, $locationProvider) => {
  $routeProvider.when('/', {
    templateUrl: 'home.html',
    controller: 'HomeCtrl',
    controllerAs: 'vm'
  }).when('/:id', {
    templateUrl: 'days.html',
    controller: 'DaysCtrl',
    controllerAs: 'vm'
  });

  $locationProvider.html5Mode(true);
  $locationProvider.html5Mode(true).hashPrefix('!');
};

routing.$inject = ['$routeProvider', '$locationProvider'];

export default routing;
