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

mongoose.connect('mongodb://localhost/quotes');
mongoose.Promise = global.Promise;

var QuotesSchema = new mongoose.Schema({
    author: {type: String, required: true},
    quote: {type: String, required: true}
}, {timestamps: true})

mongoose.model('Quote', QuotesSchema);
var Quote = mongoose.model('Quote')



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ routing ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

app.get('/', function(req, res) {
    res.render('index');
})

app.get('/quotes', function(req, res) {
    Quote.find({}, function(err, quotes) {
        if (err) {
            console.log("~~~~~ We have a query error! ~~~~~", err);
            for(var key in err.errors){
                req.flash('query err:', err.errors[key].message);
            }
        } else {
            console.log('~~~~~ successfully found all quotes! ~~~~~');
            console.log(quotes);
            res.render('quotes', {quotes: quotes});
        }
    })
})

app.post('/quotes', function(req, res) {
    console.log("POST DATA", req.body);
    var quote = new Quote({author: req.body.author, quote: req.body.quote});
    quote.save(function(err) {
        if(err) {
            console.log("~~~~~ We have a post error! ~~~~~", err);
            for(var key in err.errors){
                req.flash('POST err:', err.errors[key].message);
            }
        } else {
            console.log('~~~~~ successfully added a quote! ~~~~~');
            res.redirect('/quotes');
        }
    })
})



// ~~~~~~~~~~~~~~~ listen ~~~~~~~~~~~~~~~

app.listen(8000, function() {
    console.log("listening on port 8000");
})