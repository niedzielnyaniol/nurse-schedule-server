// angular.module('app')
//     .controller('ApplicationController', function($scope, ApplicationService){
    
    
//     $scope.generateSchedule = function(){
        
//         $scope.isDisabled = true;
        
//         ApplicationService.fetchData()
//             .then(function success(data){
//                 // $scope.isHidden = true;
//                 $scope.isDisabled = false;
//                 $scope.calendar = data.data;
//                 $scope.marginFirst = 'margin-left:' + (data.data[0].dayOfTheWeek * 120) + 'px';
//             });
//     };
         
// });

import AplicationService from '../services/application.svc';

export default class ApplicationController {
    constructor(ApplicationService) {
        this.as = ApplicationService;
        this.isDisabled = false;
        this.isHidden = false;
        this.days = [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
        ];
    }

    generateSchedule() {

        this.isDisabled = true;
        
        this.as.fetchData()
            .then(( data ) => {
                this.isDisabled = false;
                this.calendar = data.data;
                console.log(data.data);
                this.marginFirst = 'margin-left:' + (data.data[0].dayOfTheWeek * 120) + 'px';
            } );
    }
}

ApplicationController.$inject = ['ApplicationService'];