const router = require('express').Router();
const dataFaker = require('../modules/dataFaker');

router.get('/', (req, res) => {
  const randomFirstDay = dataFaker.getRandomInt(0, 6);
  const data = dataFaker.getData(randomFirstDay);

  res.json(data);
});

module.exports = router;
