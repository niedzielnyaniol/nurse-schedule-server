class DataService {
  constructor(config) {
    this.data = config.nurses;
  }

  getNurse(nurseNumber) {
    return this.data[nurseNumber - 1];
  }

  getNurses() {
    return this.data;
  }
}

DataService.$inject = ['config'];

exports.module = DataService;
