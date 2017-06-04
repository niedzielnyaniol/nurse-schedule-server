const router = require('express').Router();
const path = require('path');

const json2csv = require('json2csv');
const fs = require('fs');

router.get('/', (req, res) => {
  const fields = ['car', 'price', 'color'];
  const myCars = [
    {
      car: 'Audi',
      price: 40000,
      color: 'blue'
    }, {
      car: 'BMW',
      price: 35000,
      color: 'black'
    }, {
      car: 'Porsche',
      price: 60000,
      color: 'green'
    }
  ];

  const csv = json2csv({ data: myCars, fields, del: ';' });

  fs.writeFile('nurse-sheduler.csv', csv, (err) => {
    if (err) {
      throw err;
    }

    res.download(path.join(__dirname, '../../nurse-sheduler.csv'));
  });

});

module.exports = router;
