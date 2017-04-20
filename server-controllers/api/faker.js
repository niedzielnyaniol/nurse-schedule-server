const router = require('express').Router();
const dataFaker = require('../modules/dataFaker');

router.get('/', function(req, res, next){  
    var randomFirstDay = dataFaker.getRandomInt(0, 6);
    var data = dataFaker.getData(randomFirstDay);
    
    console.log(JSON.stringify(data, null, 4));  

    setTimeout(function(){
        res.json(data);
    }, 1000);
});

module.exports = router;