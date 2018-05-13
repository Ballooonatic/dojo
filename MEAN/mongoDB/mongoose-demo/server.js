var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');





mongoose.connect('mongodb://localhost/mongoose-demo');
// Note: If you connect to a database that doesn't exist, mongoose WILL create the DB for you!
var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})

// Note: If you create a model, mongoose WILL create the appropriate collection in your database for you! Even with the appropriate naming (plural for collection names)!

mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'

// Use native promises, because mongoose's promise functionality will be broken soon
mongoose.Promise = global.Promise;





app.get('/', function(req, res) {
    User.find({}, function(err, users) {
        if (err) {
            console.log('~~~~~~~~~~ something went wrong with .find() ~~~~~~~~~~');
        } else {
            console.log('~~~~~~~~~~ successfully found all users! ~~~~~~~~~~');
            console.log(users);
            res.render('index', {users: users});
        }
    })
})

app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    var user = new User({name: req.body.name, age: req.body.age});
    user.save(function(err) {
        if(err) {
            console.log('~~~~~~~~~~ something went wrong with post ~~~~~~~~~~');
        } else {
            console.log('~~~~~~~~~~ successfully added a user! ~~~~~~~~~~');
            res.redirect('/');
        }
    })
})





app.listen(8000, function() {
    console.log("listening on port 8000");
})