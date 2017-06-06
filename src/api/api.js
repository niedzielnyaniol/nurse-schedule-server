const router = require('express').Router();
const dataFaker = require('../modules/dataFaker');

router.get('/faker', (req, res) => {
  const randomFirstDay = dataFaker.getRandomInt(0, 6);
  const data = dataFaker.getData(randomFirstDay);

  res.json(data);
});

router.post('/data', (req, res) => {
  console.log(req.body[0]);
});

module.exports = router;
