import find from 'lodash/find';

class DataService {
  constructor() {
    this.data = [];
  }

  setData(data) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  getDay(dayNumber) {
    const data = this.getData();

    return find(data,
      el => el.number === dayNumber
    );
  }
}

export default DataService;
