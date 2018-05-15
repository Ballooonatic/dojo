//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ setup ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var express    = require('express');
var app        = express();
var path       = require('path');
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');
var flash      = require('express-flash');
var session    = require('express-session');
 



app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());
app.use(express.static(path.join(__dirname, './static')));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ database ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

mongoose.connect('mongodb://localhost/mongoose-dashboard');
mongoose.Promise = global.Promise;

var CowsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    color: {type: String, required: true},
    race: {type: String, required: true},
    age: {type: Number, required: true},
    currentFarm: {type: String, required: true}
});

mongoose.model('Cow', CowsSchema);
var Cow = mongoose.model('Cow')



// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ routing ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// GET '/' Displays all of the cows.
app.get('/', function(req, res) {
    Cow.find({}, function(err, cows) {
        if (err) {
            console.log("~~~~~ We have a query error! ~~~~~", err);
            for(var key in err.errors){
                req.flash('query err:', err.errors[key].message);
            }
        } else {
            console.log('~~~~~ successfully found all cows! ~~~~~');
            console.log(cows);
            res.render('all-cows', {cows: cows});
        }
    })
})



// GET '/cows/new' Displays a form for making a new cow.
app.get('/cows/new', function(req, res) {
    res.render('new-cow')
})



// GET '/cows/:id' Displays information about one cow.
app.get('/cows/:id', function(req, res) {
    Cow.findOne({_id: req.params.id}, function(err, cow) {                                                      // fix the query
        if (err) {
            console.log("~~~~~ We have a query error! ~~~~~", err);
            for(var key in err.errors){
                req.flash('query err:', err.errors[key].message);
            }
        } else {
            console.log('~~~~~ successfully found the cow! ~~~~~');
            console.log(cow);
            res.render('one-cow', {cow: cow});
        }
    })
});



// POST '/cows' Should be the action attribute for the form in the above route (GET '/cows/new').
app.post('/cows', function(req, res) {
    console.log("POST DATA", req.body);
    var cow = new Cow({
        name: req.body.name,
        color: req.body.color,
        race: req.body.race,
        age: req.body.age,
        currentFarm: req.body.currentFarm
    });
    cow.save(function(err) {
        if(err) {
            console.log("~~~~~ We have a post error! ~~~~~", err);
            for(var key in err.errors){
                req.flash('POST err:', err.errors[key].message);
            }
        } else {
            console.log('~~~~~ successfully added a cow! ~~~~~');
            res.redirect('/');
        }
    })
})



// GET '/cows/edit/:id' Should show a form to edit an existing cow.
app.get('/cows/edit/:id', function(req, res) {
    Cow.findOne({_id: req.params.id}, function(err, cow) {                                                      // fix the query
        if (err) {
            console.log("~~~~~ We have a query error! ~~~~~", err);
            for(var key in err.errors){
                req.flash('query err:', err.errors[key].message);
            }
        } else {
            console.log('~~~~~ successfully found the cow! ~~~~~');
            console.log(cow);
            res.render('edit-cow', {cow: cow});
        }
    })
})



// POST '/cows/:id' Should be the action attribute for the form in the above route (GET '/cows/edit/:id').
app.post('/cows/:id', function (req, res) {
    Cow.updateOne({_id: req.params.id}, {                                                                       // fix the query
        name: req.body.name,
        color: req.body.color,
        race: req.body.race,
        age: req.body.age,
        currentFarm: req.body.currentFarm
    }, function(err) {
        if (err) {
            console.log("~~~~~ We have a update error! ~~~~~", err);
            for(var key in err.errors){
                req.flash('update err:', err.errors[key].message);
            }
        } else {
            console.log('~~~~~ successfully updated the cow! ~~~~~');
            res.redirect('/');
        }
    })
})



// POST '/cows/destroy/:id' Should delete the cow from the database by ID.
app.post('/cows/destroy/:id', function (req, res) {
    Cow.remove({_id: req.params.id}, function(err) {                                                             // fix the query
        if (err) {
            console.log("~~~~~ We have a delete error! ~~~~~", err);
            for(var key in err.errors){
                req.flash('update err:', err.errors[key].message);
            }
        } else {
            console.log('~~~~~ successfully deleted the cow! ~~~~~');
            res.redirect('/');
        }
    })
})



// ~~~~~~~~~~~~~~~ listen ~~~~~~~~~~~~~~~

app.listen(8000, function() {
    console.log("listening on port 8000");
})