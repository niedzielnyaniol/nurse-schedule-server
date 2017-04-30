import AplicationService from '../services/application.svc';

export default class ApplicationController {
    constructor(ApplicationService) {
        this.ApplicationService = ApplicationService;
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

        this.ApplicationService.fetchData()
            .then(( data ) => {
                this.isDisabled = false;
                this.calendar = data.data;
                this.marginFirst = 'margin-left:' + (data.data[0].dayOfTheWeek * 120) + 'px';
            } );
    }
}

ApplicationController.$inject = ['ApplicationService'];