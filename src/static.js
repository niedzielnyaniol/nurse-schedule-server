const router = require( 'express' ).Router();
const path = require( 'path' );
const express = require( 'express' );

router.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname + '/../layouts/app.html'));
});

router.use(express.static(__dirname + '/../assets'));
router.use(express.static(__dirname + '/../templates'));
router.use(express.static(__dirname + '/../directives-templates'));

module.exports = router;