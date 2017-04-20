const router = require('express').Router();
const dataFaker = require('../modules/dataFaker');

router.get('/', function(req, res, next){  
    var randomFirstDay = dataFaker.getRandomInt(0, 6);
    var data = {shedule:dataFaker.getData(randomFirstDay)};
    
    console.log(JSON.stringify(data, null, 4));  
    res.json(data);
});

module.exports = router;