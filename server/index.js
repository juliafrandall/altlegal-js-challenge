var express = require('express');

var app = express();

// require('./config/middleware.js')(app, express);
app.use(express.static(__dirname + '/../client/'))

var port = process.env.PORT || 8000
app.listen(port);

console.log('I AM SERVING')

module.exports = app;
