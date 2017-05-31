/* eslint angular/log: 0 */
/* eslint angular/json-functions: 0 */
/* eslint no-console: 0 */

const router = require('express').Router();
const dataFaker = require('../modules/dataFaker');

router.get('/', (req, res) => {
  const randomFirstDay = dataFaker.getRandomInt(0, 6);
  const data = dataFaker.getData(randomFirstDay);

  console.log(JSON.stringify(data, null, 4));

  res.json(data);
});

module.exports = router;
