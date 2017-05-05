export default function routing( $routeProvider ){
  $routeProvider.when( '/', {
    templateUrl: 'home.html',
    controller: 'HomeCtrl',
    controllerAs: 'vm'
  } ).when( '/nurse', {
    templateUrl: 'nurse.html',
    controller: 'nurseCtrl',
    controlerAs: 'vm'
  } )
}

routing.$inject = [ '$routeProvider' ];