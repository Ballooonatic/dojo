const express = require('express')
const app     = express()

app.use(express.static(__dirname + "/dist/ng-app"))

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/dist/ng-app/index.html")
})

app.listen(8000, function() {
    console.log("~~~ Listening on 8000 ~~~")
})