angular.module('app')
    .controller('ApplicationController', function($scope, ApplicationService){
    
    $scope.isDisabled = false;
    $scope.isHidden = false;
    
    $scope.generateSchedule = function(){
        
        $scope.isDisabled = true;
        
        ApplicationService.fetchData()
            .then(function success(data){
                $scope.isHidden = true;
                $scope.calendar = data.data;
            });
    };
         
});