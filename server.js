var GitHubApi = require("node-github");
var express = require('express');
var app = express();
const PORT = process.env.PORT || 8080;

app.use('/static', express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/home.html');
});

app.get('/register', function(req, res) {
  res.sendFile(process.cwd() + '/views/register.html');
});

app.get('/dashboard', function(req, res) {
  res.sendFile(process.cwd() + '/views/dashboard.html');
});

app.get('/dashboard/:githubUsername', function(req, res) {
  var github = new GitHubApi({
    version: "3.0.0"
  });

  github.user.getFrom({
    user: req.params.githubUsername
  }, function(err, result) {
    console.log(result);
    res.send(JSON.stringify(result));
  });
});



app.listen(PORT, function() {
  console.log('Listening on port %s', PORT);
});