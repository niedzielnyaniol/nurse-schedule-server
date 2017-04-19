const router = require('express').Router();

dataFaker = {
    getData: function(){

        var data = [];

        //TODO: data faker
        
        return data;
    }
}

router.get('/', function(req, res, next){
    
    
    res.json({shedule:dataFaker.getData()});
});

module.exports = router;