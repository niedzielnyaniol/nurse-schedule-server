const dataFaker = {
  getRandomInt: (min, max) =>
     Math.floor(Math.random() * ((max - min) + 1)) + min,

  generateArrayOfNurses: (numberOfNurses) => {
    const nursesArray = [];

    for (let i = 0; i < numberOfNurses; i++) {
      let tmpId = dataFaker.getRandomInt(1, 16);

      while (nursesArray.indexOf(tmpId) !== -1) {
        tmpId = dataFaker.getRandomInt(1, 16);
      }

      nursesArray.push(tmpId);
    }

    return nursesArray;
  },

  getNurses: (numberOfNurses) => {
    const nursesArray = dataFaker.generateArrayOfNurses(numberOfNurses);

    const data = {};

    for (let i = 0; i < numberOfNurses; i++) {
      data[i] = nursesArray[i];
    }

    return data;
  },

  getNormalDayShifts: () => {
    const data = {};

    for (let i = 0; i < 3; i++) {
      data[i] = dataFaker.getNurses(3);
    }

    data[3] = dataFaker.getNurses(1);

    return data;
  },

  getWeekendDayShifts: () => {
    const data = {};

    for (let i = 0; i < 3; i++) {
      data[i] = dataFaker.getNurses(2);
    }

    data[3] = dataFaker.getNurses(1);

    return data;
  },

  getDayName: (i) => {
    let day;

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
      default:
        throw new Error('Value doesn\'t match');
    }

    return day;
  },

  getData: (randomFirstDay) => {
    const data = [];

    for (let i = 1 + randomFirstDay; i <= 35 + randomFirstDay; i++) {
      let tmpData = {};

      if ((i % 7 === 5 || i % 7 === 6) && i !== 0) {
        tmpData = {
          number: i - randomFirstDay,
          dayOfTheWeek: i % 7,
          day: dataFaker.getDayName(i),
          shifts: dataFaker.getWeekendDayShifts()
        };
      } else {
        tmpData = {
          number: i - randomFirstDay,
          dayOfTheWeek: i % 7,
          day: dataFaker.getDayName(i),
          shifts: dataFaker.getNormalDayShifts()
        };
      }

      data.push(tmpData);
    }

    return data;
  }
};

module.exports = dataFaker;
