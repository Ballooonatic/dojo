// imports
const path       = require('path');
const app        = require('express')();
const bodyParser = require('body-parser');
const session    = require('express-session');
const bcrypt     = require('bcrypt-as-promised');
 
// setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// db & routing
require("./server/user-model.js")
require('./server/routes.js')(app)

// listen
app.listen(8000, function() {
    console.log("listening on port 8000");
})