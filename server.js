const express = require('express');
const path = require('path');
const compression = require('compression')
var cors = require('cors');
const app = express();
// app.use(compression())
app.use(cors());

// app.use(function(req, res, next) {
//     req.header("Access-Control-Allow-Origin", "http://localhost:4000"); // update to match the domain you will make the request from
//     req.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Origin", "http://localhost:4000"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

// Serve static files....
app.use(express.static(__dirname + '/dist/glugweb'));

// Send all requests to index.html
app.get('/*',function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/glugweb/index.html'));
});

// default Heroku PORT
app.listen(process.env.PORT || 4000);

