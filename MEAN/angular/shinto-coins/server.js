const express = require('express'), app = express()

app.use(express.static(__dirname + '/dist/shinto-coins'))

app.all('*', (req, res) => { res.sendFile(__dirname + '/dist/shinto-coins/index.html') })

app.listen(8000, () => { console.log('~~~ Listening on 8000 ~~~'); })