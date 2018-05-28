const express = require('express');
const path    = require('path')
const app     = express();

app.use(express.static( __dirname + '/dist/hello-angular' ));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/hello-angular/index.html'))
})

app.listen(8000, function(){
    console.log("~~~ Listening on 8000 ~~~")
})