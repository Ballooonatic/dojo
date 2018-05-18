const mongoose = require('mongoose')



mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/mongoose-dashboard');

mongoose.connection.on('connected', () => console.log('Connected to MongoDB'));