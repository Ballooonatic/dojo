// ~~~~~~~~~~ IMPORTS ~~~~~~~~~~
var express = require("express"),
    app = express(),
    server = app.listen(8000),
    io = require('socket.io')(server),
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



// ~~~~~~~~~~ SOCKET ~~~~~~~~~~
io.on('connection', function (socket) {

    socket.emit('greeting', { msg: 'ams listenings for formdatas' });

    socket.on('formdatas', function(data) {
        var rand = Math.floor(Math.random() * 1000);

        var formdatas = { // about as elegant as i could currently manage :(
            name: data[0].value,
            dojoLocation: data[1].value,
            faveLanguage: data[2].value,
            comment: data[3].value,
            rand: rand
        }

        socket.emit('message', formdatas);
    });

});