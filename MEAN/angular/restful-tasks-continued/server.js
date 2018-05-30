const express    = require('express');
const app        = express();
const path       = require('path')
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(express.static( __dirname + '/dist/restful-tasks-continued' ));





mongoose.connect('mongodb://localhost/restful-task-API');
mongoose.Promise = global.Promise;

const TasksSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, default: ""},
    completed: {type: Boolean, default: false}
}, {timestamps: true})

const Task = mongoose.model('Task', TasksSchema)





app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/restful-tasks-continued/index.html'))
})

app.get('/tasks', function(req, res) {
    Task.find({}, function(err, tasks){
        if (err) {
           console.log("Returned error", err);
           res.json({message: "Error", error: err})
        }
        else {
           res.json(tasks)
        }
    })
})



app.get('/tasks/:id', function(req, res) {
    Task.find({_id: req.params.id}, function(err, task){
        if (err) {
           console.log("Returned error", err);
           res.json({message: "Error", error: err})
        }
        else {
           res.json({message: "Success", data: task})
        }
    })
})



app.post('/tasks', function(req, res) {
    Task.create({title: req.body.title, description: req.body.description}, function(err, task){
        if (err) {
           console.log("Returned error", err);
           res.json({message: "Error", error: err})
        }
        else {
           res.json({message: "Success", data: task})
        }
    })
})



app.put('/tasks/:id', function(req, res) {
    Task.updateOne({_id: req.params.id}, req.body, function(err, task) {
        if (err) {
            console.log("Returned error", err);
            res.json({message: "Error", error: err})
        }
        else {
            res.json({message: "Success", data: task})
        }
    })
})



app.delete('/tasks/:id', function(req, res) {
    Task.remove({_id: req.params.id}, function(err, db_msg){
        if (err) {
           console.log("Returned error", err);
           res.json({message: "Error", error: err})
        }
        else {
           res.json({message: "Success", data: db_msg})
        }
    })
})



app.listen(8000, function() {
    console.log("~~~~~ listening on 8000 ~~~~~");
})