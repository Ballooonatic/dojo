const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/login-and-registration');

mongoose.connection.on('connected', () => console.log('Connected to MongoDB'));





var UsersSchema = new mongoose.Schema({
    
    first_name: {
        type: String,
        required: [true, "this is for something else"],
        trim: true,
    },

    last_name: {
        type: String,
        required: true,
        trim: true
    },
    
    email: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function ( value ) {
                return /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i.test( value );
            },
            message: "Email failed validation"
        }
    },
    phone: {
        type: String,
        validate: {
            validator: function( number ) {
                return /\d{3}-\d{3}-\d{4}/.test( number );
            },
            message: `{ VALUE } is not a valid phone number`
        },
        required: [true, "Customer phone number required"]
    },
    gender: {
        type: String,
        enum: ['MALE', 'FEMALE'],
        uppercase: true,
        trim: true,
        required: [true, 'Please provide a gender']
    },
    age: {
        type: Number,
        min: [18, "Maybe you need to be a little older"],
        max: [85, "You might want to be enjoying your retirement rather than using this site"],
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true});





const User = mongoose.model('User', UsersSchema)

module.exports = User
