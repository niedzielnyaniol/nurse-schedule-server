const router = require('express').Router();
const dataFaker = require('../modules/dataFaker');

router.get('/faker', (req, res) => {
  const data = dataFaker.getData(6);

  res.json(data);
});

router.post('/data', (req, res) => {
  console.log(req.body[0]);
});

module.exports = router;
