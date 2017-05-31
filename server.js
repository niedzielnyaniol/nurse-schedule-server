/* eslint no-console: 0 */
/* eslint angular/log: 0 */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());

app.use('/api/faker', require('./src/api/faker'));
app.use(require('./src/static'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/layouts/app.html'));
});

app.listen(3000, () => {
  console.log('Server is listening at port no. 3000');
});
