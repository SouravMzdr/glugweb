const express = require('express');
const path = require('path');
const compression = require('compression')
var cors = require('cors');
const app = express();
app.use(compression())
app.use(cors());


// Serve static files....
app.use(express.static(__dirname + '/dist/glugweb'));

// Send all requests to index.html
app.get('/*',function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/glugweb/index.html'));
});

// default Heroku PORT
app.listen(process.env.PORT || 4000);

