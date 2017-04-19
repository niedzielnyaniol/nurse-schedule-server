const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use('/api/faker', require('./server-controllers/api/faker'));
app.use(require('./server-controllers/static'));

app.listen(3000, function(){
    console.log('Server is listening at port no. 3000');
});