const express    = require('express');
const app        = express();
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json())




mongoose.connect('mongodb://localhost/1955-API');
mongoose.Promise = global.Promise;

const PeopleSchema = new mongoose.Schema({name: String}, {timestamps: true})

const People = mongoose.model('People', PeopleSchema)




// GET '/' will serve up the full collection of people born in 1955
app.get('/', function(req, res) {
    People.find({}, function(err, people){
        if (err) {
           console.log("Returned error", err);
           res.json({message: "Error", error: err})
        }
        else {
           res.json(people)
        }
    })
})


// GET '/new/:name/' will add a name into the database which can be used for blank spaces. So adding Steve Jobs to our database, you'd type in the URL 'localhost:8000/new/Steve Jobs'
app.get('/new/:name/', function(req, res) {
    People.create({name: req.params.name}, function(err, person){
        if (err) {
           console.log("Returned error", err);
           res.json({message: "Error", error: err})
        }
        else {
           res.json({message: "Success", data: person})
        }
    })
})


// GET '/remove/:name/' will delete a name from the database.
app.get('/remove/:name/', function(req, res) {
    People.remove({name: req.params.name}, function(err, db_msg){
        if (err) {
           console.log("Returned error", err);
           res.json({message: "Error", error: err})
        }
        else {
           res.json({message: "Success", data: db_msg})
        }
    })
})


// GET '/:name' will bring up the document of that particular person.
app.get('/:name', function(req, res) {
    People.find({name: req.params.name}, function(err, person){
        if (err) {
           console.log("Returned error", err);
           res.json({message: "Error", error: err})
        }
        else {
           res.json({message: "Success", data: person})
        }
    })
})


app.listen(8000, function() {
    console.log("~~~~~ listening on 8000 ~~~~~");
})