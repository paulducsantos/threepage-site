var express = require('express');
var app = express();
const PORT = 8080;

app.use('/static', express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/home.html');
});

app.get('/register', function(req, res) {
  res.sendFile(process.cwd() + '/views/register.html');
});

// app.get('/', function(req, res) {
//   res.sendFile(process.cwd() + '/views/home.html');
// });

app.listen(PORT, function() {
  console.log('Listening on port %s', PORT);
});