const http = require('http')
const express = require('express');
const app = express();

app.use(express.static( __dirname + '/dist/weather-api' ));

// This bad boy catches all possible routes.
app.all('*', (req, res, next) => {
    res.sendFile(__dirname + '/dist/weather-api/index.html')
})

app.listen(8000, () => {
    console.log("~~~ Listening on 8000 ~~~")
})