dataFaker = {

    
    getRandomInt: function(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    
    generateArrayOfNurses: function(numberOfNurses){
        var nursesArray = [];

        for(let i = 0; i < numberOfNurses; i++){
            let tmpId = this.getRandomInt(1, 16);

            while(nursesArray.indexOf(tmpId) != -1){
                tmpId = this.getRandomInt(1, 16);
            }
            
            nursesArray.push(tmpId);
        }

        return nursesArray
    },

    getNurses: function(numberOfNurses){

        var nursesArray = this.generateArrayOfNurses(numberOfNurses);
        
        var data = {};

        for(let i = 0; i < numberOfNurses; i++){
            data[i] = nursesArray[i];
        }

        return data;
    },

    getNormalDayShifts: function(){
        var data = {};

        for(let i = 0; i < 3; i++){
            data[i] = this.getNurses(3)
        }

        data[3] = this.getNurses(1);

        return data;
    },

    getWeekendDayShifts: function(){
        var data = {};

        for(let i = 0; i < 3; i++){
            data[i] = this.getNurses(2)
        }

        data[3] = this.getNurses(1);

        return data;
    },

    getDayName: function(i){

        var day;

        switch (i % 7) {
            case 0:
                day = 'monday';
                break;
                
            case 1:
                day = 'tuesday';
                break;
                
            case 2:
                day = 'wednesday';
                break;
                
            case 3:
                day = 'thursday';
                break;
                
            case 4:
                day = 'friday';
                break;
                
            case 5:
                day = 'saturday';
                break;
                
            case 6:
                day = 'sunday';
                break;
        }
        
        return day;
    },

    getData: function(randomFirstDay){

        var data = [];

        for(let i = 0 + randomFirstDay; i < 35 + randomFirstDay; i++){
            let tmpData = {};

            if((i % 7 == 5 || i % 7 == 6) && i != 0){
                tmpData[i - randomFirstDay] = {
                    'day': this.getDayName(i),
                    'shifts': this.getWeekendDayShifts()
                }
            } else {
                tmpData[i - randomFirstDay] = {
                    'day': this.getDayName(i),
                    'shifts': this.getNormalDayShifts()
                }
            }
            
            data.push(tmpData);
        }
        

        return data;
    }
}

module.exports = dataFaker;