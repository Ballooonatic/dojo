// ~~~~~~~~~~ IMPORTS ~~~~~~~~~~
var express = require("express"),
    app = express(),
    server = app.listen(8000),
    io = require('socket.io')(server),
    path = require("path");
    counter = 0;



// ~~~~~~~~~~ SETUP ~~~~~~~~~~
app.use(express.static(path.join(__dirname, "./static")));

// app.set('views', path.join(__dirname, './views'));
// app.set('view engine', 'ejs');



// ~~~~~~~~~~ ROUTING ~~~~~~~~~~
app.get('/', function(req, res) {
    res.render("index");
})



// ~~~~~~~~~~ SOCKET ~~~~~~~~~~
io.on('connection', function (socket) {
    socket.emit('greeting', 'ams awaitings buttons presses');
    socket.emit('count', counter)

    socket.on('1up', function(){
        counter++;
        io.emit('count', counter)
    })

    socket.on('reset', function(){
        counter = 0;
        io.emit('count', counter)
    })
});