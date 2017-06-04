/* eslint angular/json-functions:0 */

const router = require('express').Router();
const path = require('path');
const request = require('request');
const _ = require('lodash');

const json2csv = require('json2csv');
const fs = require('fs');

router.get('/', (req, res) => {
  request('http://localhost:3000/api/faker', (error, response, body) => {
    if (!error && response.statusCode === 200) {
      createFile(JSON.parse(body), res);
    }
  });
});

const createFile = (data, res) => {
  const fields = ['number', 'day', 'shifts'];
  const fieldNames = ['#', 'Day', 'Shifts'];
  const csv = json2csv({ data, fields, fieldNames, del: ';' });

  fs.writeFile('nurse-sheduler.csv', csv, (err) => {
    if (err) {
      throw err;
    }

    res.download(path.join(__dirname, '../../nurse-sheduler.csv'));
  });
};

module.exports = router;
