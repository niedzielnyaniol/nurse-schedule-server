angular.module('app')
    .controller('ApplicationController', function($scope, ApplicationService){
    
    $scope.isDisabled = false;
    $scope.isHidden = false;
    $scope.days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];
    
    $scope.generateSchedule = function(){
        
        $scope.isDisabled = true;
        
        ApplicationService.fetchData()
            .then(function success(data){
                // $scope.isHidden = true;
                $scope.isDisabled = false;
                $scope.calendar = data.data;
                $scope.marginFirst = 'margin-left:' + (data.data[0].dayOfTheWeek * 120) + 'px';
            });
    };
         
});