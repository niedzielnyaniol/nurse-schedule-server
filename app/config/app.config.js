export default function routing( $routeProvider ){
  $routeProvider.when( '/nurse', {
    templateUrl: 'nurse.html',
    controller: 'nurseCtrl',
    controlerAs: 'vm'
  } )
}

console.log('hello from routing');

routing.$inject = [ '$routeProvider' ];