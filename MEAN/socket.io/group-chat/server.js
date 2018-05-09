var express = require("express"),
    app = express(),
    server = app.listen(8000),
    io = require('socket.io')(server),
    path = require("path");

app.use(express.static(path.join(__dirname, "./static")));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
})

var chatLog = [];

io.on('connection', function (socket) {

    // 1.1 ~ execute loadMessages / pass the array of messages
    socket.emit('loadMessages', chatLog);

    // 2.2 ~ save the name to the socket connection, emit to everyone that the they joined
    socket.on('login', function(nam){
        socket.username = nam;
        chatLog.push({msg: "~~~ "+nam+" joined! ~~~"})
        io.emit('join', nam);
    });

    // 3.2 ~ when a message is received, push it to the list of messages, and emit it to everyone.
    socket.on('msg', function(msg){
        var data = { name: socket.username, msg: msg };
        chatLog.push(data);
        io.emit('msg', data);
    });
    
    // 4.1 ~ when the user disconnects, pass the name to everyone
    socket.on('disconnect', function(){
        if (socket.username !== undefined) {   
            var nam = socket.username;
            chatLog.push({msg: "~~~ "+nam+" left! ~~~"})
            socket.broadcast.emit('user-left', nam);
        }
    });
});