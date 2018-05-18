// imports
var express    = require('express');
var app        = express();
var path       = require('path');
var bodyParser = require('body-parser');
 
// setup
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

// db & routing
require("./server/config/mongoose.js")
require('./server/config/routes.js')(app)

// listen
app.listen(8000, function() {
    console.log("listening on port 8000");
})