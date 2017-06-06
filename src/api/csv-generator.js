/* eslint angular/json-functions:0 */
const forEach = require('lodash/forEach');
const cloneDeep = require('lodash/cloneDeep');
const dataSvc = require('./data').module;

const router = require('express').Router();
const path = require('path');
const request = require('request');

const json2csv = require('json2csv');
const fs = require('fs');

router.get('/', (req, res) => {
  request('http://localhost:3000/api/faker', (error, response, body) => {
    if (!error && response.statusCode === 200) {
      createFile(JSON.parse(body), res);
    }
  });
});

const convertFile = (data) => {
  const output = [];
  const newObject = {};
  forEach(data, (el) => { // day
    newObject.number = el.number;
    newObject.dayOfTheWeek = el.dayOfTheWeek;
    newObject.day = el.day;
    newObject.earlyDay = [];
    newObject.dayShift = [];
    newObject.lateDay = [];
    newObject.nights = [];

    forEach(el.shifts[0], (el1) => {
      newObject.earlyDay.push(dataSvc.getNurse(el1));
    });
    forEach(el.shifts[1], (el1) => {
      newObject.dayShift.push(dataSvc.getNurse(el1));
    });
    forEach(el.shifts[2], (el1) => {
      newObject.lateDay.push(dataSvc.getNurse(el1));
    });
    forEach(el.shifts[3], (el1) => {
      newObject.nights.push(dataSvc.getNurse(el1));
    });

    output.push(cloneDeep(newObject));
  });

  return output;
};

const createFile = (data, res) => {
  const schedule = convertFile(data);
  const fields = ['number', 'day', 'earlyDay', 'dayShift', 'lateDay', 'nights'];
  const fieldNames = ['#', 'Day', 'Early Day', 'Day', 'Late Day', 'Night'];
  const csv = json2csv({ data: schedule, fields, fieldNames, del: ';' });

  fs.writeFile('nurse-sheduler.csv', csv, (err) => {
    if (err) {
      throw err;
    }

    res.download(path.join(__dirname, '../../nurse-sheduler.csv'));
  });
};

module.exports = router;
