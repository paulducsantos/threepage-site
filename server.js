var express = require('express');
var app = express();
const PORT = 8080;

app.use('/static', express.static('public/js'));