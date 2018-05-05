// ~~~~~~~~~~ IMPORTS ~~~~~~~~~~
var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require('body-parser');



// ~~~~~~~~~~ SETUP ~~~~~~~~~~
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');



// ~~~~~~~~~~ ROUTING ~~~~~~~~~~
app.get('/', function(req, res) {
    res.render("index");
})

app.post('/result', function(req, res) {
    console.log("POST DATA \n\n", req.body)
    res.render("results", req.body);
})

// ~~~~~~~~~~ LISTEN ~~~~~~~~~~
app.listen(8000, function() {
    console.log("listening on port 8000");
});