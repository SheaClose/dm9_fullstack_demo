const express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  port = 3001,
  app = express(),
  massive = require('massive');
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/public'));

app.listen(port, function() {
  console.log('Server listening on port', port);
});
