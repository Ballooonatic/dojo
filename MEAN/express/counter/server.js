// ~~~~~~~~~~ IMPORTS ~~~~~~~~~~
var express = require("express"),
    session = require('express-session'),
    app = express(),
    path = require("path"),
    bodyParser = require('body-parser')
    counter = 0;



// ~~~~~~~~~~ SETUP ~~~~~~~~~~
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');



// ~~~~~~~~~~ ROUTING ~~~~~~~~~~
app.get('/', function(req, res) {
    counter++;
    req.session.timesVisited = counter;
    res.render("index", {session: req.session});
})

app.get('/plus-two', function(req, res) {
    counter++
    res.redirect('/')
})

app.get('/reset', function(req, res) {
    counter = 0
    res.redirect('/')
})



// ~~~~~~~~~~ LISTEN ~~~~~~~~~~
app.listen(8000, function() {
    console.log("listening on port 8000");
});