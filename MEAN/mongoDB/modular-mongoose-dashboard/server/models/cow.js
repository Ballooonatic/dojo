const mongoose = require('mongoose')

const CowsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    color: {type: String, required: true},
    race: {type: String, required: true},
    age: {type: Number, required: true},
    currentFarm: {type: String, required: true}
});

const Cow = mongoose.model('Cow', CowsSchema)

module.exports = Cow;