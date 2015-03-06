var express = require('express')
  ,app = express()
  ,bodyParser = require('body-parser')
  ,cookieParser = require('cookie-parser')
  ,mongoose = require('mongoose')
  ,logger = require('morgan')
;

// mogoose
mongoose.connect('mongodb://localhost:27017/myProjects');

var projectCtlr = require('./server/controllers/Projects');
var commectCtlr = require('./server/controllers/Comments');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', function(req, res) {
  res.sendfile(__dirname = "app/index.html");
});

app.use('/', express.static(__dirname + '/app'));

/*
 *
 * REST API
 *
 */

// Projects
app.get('/api/projects', projectCtlr.list);
app.get('/api/projects/:id', projectCtlr.get);
//app.post('/api/projects', projectCtlr.create);

var port = 8000;

// Start the server
app.listen(port, function() {
  console.log('Server listening on port '+port);
});
