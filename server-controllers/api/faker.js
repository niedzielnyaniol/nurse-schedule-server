const router = require('express').Router();

router.get('/', function(req, res, next){
    res.json({ day: 1 });
});

module.exports = router;