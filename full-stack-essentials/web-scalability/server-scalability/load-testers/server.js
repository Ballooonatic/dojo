const app = require('express')();

const data = "butts"

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html')
})

app.get('/data', (req, res) => {
    res.send(data)
})

app.listen(8000, () => {
    console.log('~~~ Listening on port 8000 ~~~')
})