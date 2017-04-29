const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use('/api/faker', require('./src/api/faker'));
app.use(require('./src/static'));

app.listen(3000, function(){
    console.log('Server is listening at port no. 3000');
});