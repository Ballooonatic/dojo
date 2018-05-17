var express    = require('express'),
    app        = express(),
    path       = require('path'),
    mongoose   = require('mongoose'),
    bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');






mongoose.connect('mongodb://localhost/message-board');
mongoose.Promise = global.Promise;



var CommentsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    comment: {type: String, required: true, maxlength: 140}
}, {timestamps: true});

var MessagesSchema = new mongoose.Schema({
    name: {type: String, required: true},
    message: {type: String, required: true},
    comments: [CommentsSchema]
}, {timestamps: true});



mongoose.model('Message', MessagesSchema);
mongoose.model('Comment', CommentsSchema);
var Message = mongoose.model('Message')
var Comment = mongoose.model('Comment')






app.get('/', function(req, res) {
    Message.find({}, function(err, msgs) {
        if (err) {
            console.log(err);
        } else {
            res.render('index', {msgs: msgs})
        }
    })
})



app.post('/messages/new', function(req, res) {
    var msg = new Message({
        name: req.body.name,
        message: req.body.message
    })
    msg.save(function(err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/')
        }
    })
})



app.post('/comments/new/:id', function(req, res) {
    Comment.create(req.body, function(err, comt){
        if (err) {
            console.log(err);
        }
        else {
            Message.findOneAndUpdate({_id: req.params.id}, {$push: {comments: comt}}, function(err, comt){
                if (err) {
                    console.log(err)
                }
                else {
                    res.redirect('/')
                }
            })
        }
    })
})



app.listen(8000, function() {
    console.log('~~~ listening on port 8000 ~~~');
})