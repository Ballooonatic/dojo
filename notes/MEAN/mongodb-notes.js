// MONGODB

// ~~~~~~~~~~ Why ~~~~~~~~~~
// TL;DR: speed.

// MongoDB is a NoSQL database.  Well great, but what is a NoSQL database??  The acronym NoSQL stands for "Not Only SQL". What this means is that while NoSQL does support a structured query language (SQL) there is more flexibility in the storage of the data other than just basic tabular storage (a.k.a housing data in tables). Most importantly, the concept of NoSQL databases emphasizes that there are no relations between the data. Think of it this way:

// In a NoSQL environment, every piece of data is unaware of the other pieces.

// To be even more concise:

// NO JOINS

// This is different from the traditional relational database model that has been used throughout the software age. Only recently has the adaptation of NoSQL been a prominent phenomenon in the industry. Does this mean every piece of software needs to use a NoSQL database from now on? No. The ideal environment to use a NoSQL database in is one that focuses on speed while having little to no need of relationships between tables (or objects in this case). Reason being: joins are an expensive operation. Think about the concept of a join:

// " SELECT * FROM users LEFT JOIN address ON users.id = address.user_id "

// For every user, we have to find the address that matches specifically one piece of information in the address table. Doing this for every entry in your table would take a lot of time. We have dealt with databases in our curriculum that may have a few hundred entries at most. Now imagine a database with a few hundred thousand entries. Now join from another table that has a few hundred thousand entries. This process would be expensive in time and resources.

// With the ability of Node servers to use socket connections, we now have the ability to communicate in real-time between clients and servers. But if we need to do an expensive operation on the server side with the database, we'll negate all the speed advantages we've gained using a Node server. This is a good reason to consider MongoDB. There are plenty of NoSQL databases out there, why use MongoDB in particular? Why make it a quintessential part of the MEAN stack?

// Because everything stored in a MongoDB database is a JSON object.




// ~~~~~~~~~~ Installation ~~~~~~~~~~

// brew install Mongodb

// cd /         go to the root directory
// copy
// mkdir data   ** make a folder called data
// cd data      go into data folder
// mkdir db     ** make another folder called db

// mongod       you should see a blinking underscore.

//     DON'T CLOSE THIS WINDOW OR TYPE ANYTHING ELSE!
//     It's much easier to stop your server if you leave this window up.  If you do close it, the MongoDB server will keep running in the background.  Forever.  

//     To shut down your server from the server window, press...

// control + c  // on your keyboard in a terminal window.

//     Connect to your database:
//     To connect to your MongoDB databases, open a new tab in your terminal or a new terminal window and type...

// mongo

//     Now you should see the terminal cursor become a single arrow and beeping underscore. We're in!

//     Shutting down if your mongod window got closed:
//     This is harder.  Open a terminal window and type:

// ps -ax | grep mongo

//     then copy the number on the left of the row that shows 'sudo mongo' (or if that's not there, just 'mongo')  This is the process ID of the mongod command you ran.  Take that number and type

// sudo kill *that_number*
//     And you'll be good.  The kill command tells a process ID to terminate.  Intense terminal stuff, huh?




// ~~~~~~~~~~ BASICS ~~~~~~~~~~

// Databases

// show dbs                        shows all dbs on your server.
// db                              shows the db you're using.
// use db                          switches to a db (creates one if not in use)
// db.dropDatabase()               deletes the current database in use.


// Collections

// show collections                shows all collections
// db.createCollection("name")     self explanatory
// db.collection.drop()            deletes the collection




// ~~~~~~~~~~ Documents CRUD ~~~~~~~~~~ // Note: great examples in the intro-to-mongodb assignment.

// CREATE - Inserting a document into a collection:

// db.collection.insert({key: 'val'})



// READ - Retrieving documents from a collection:

// db.collection.find({key: 'val'})
// db.collection.find() ~or .find({})~     displays all of a collection.
// db.collection.find().pretty()           displays it all nice and easy to read.

// If you noticed, there is a field called _id on both records we put in the database. That is the MongoDB ObjectId, which MongoDB will automatically make for you if you do not specify a value for _id. To query by id, you have to do the following:

// db.ninjas.find({_id: ObjectId("5462a78e514e258182f4c69a")})

// Notice: You can't just pass the string of characters, you must pass it as an ObjectId.

// HINT: if you want to sort by something like creation time in MongoDB, you can sort by ObjectId because it is made by using a time stamp as part of the string.



// DESTROY - Removing documents from a collection:

// db.collection.remove({key: 'val'}, boolean)

// the boolean is optional. defaults to false if not passed. if true, only the first match will be deleted (not everything that matches the query). NOTE: I don't know the order to the db's iteration..



// UPDATE - Updating documents in a collection:

// db.collection.update( { oldkey: 'oldval' }, { $set: { newkey: 'newval' } } )
// db.collection.updateMany( { oldkey: 'oldval' }, { $set: { newkey: 'newval' } } )

// here we go with the object-ception.
// some kind of operator is required i think. this one will not replace anything, only add to the documents. unless the query and update use the same field.
// NOTE: by default, update updates the FIRST MATCH.




// ~~~~~~~~~~ OPERATORS ~~~~~~~~~~

// $gt  (greater than)
// $gte (greater than or equal to)
// $lt  (less than)
// $lte (less than or equal to)
// $in  (in array)                  Use to find documents who have a particular value within an array.


// $push	                        Push to an array contained within a document.
// $pop	                            Removes either the first or last element from an array.

// db.collection.update({query}, {$pop: {array_key: (1 or -1)}})
// Use 1 for the last item in the array, -1 for the first item.

// $addToSet                        Basically $push but it prevents duplicate entries.
// $pull	                        Removes a specified value from an array, unlike $pop, which removes by location.

// Ex:
// db.collection.update({query}, {$pull: {array_key: value}})
  
// This will remove all instances of 'value' from the documents with the array specified by the array_key that match QUERY.








// MONGOOSE

// Description:

// The most popular way of using MongoDB with Node and Express is not establishing a direct connection. What we are going to do instead is use a Node module called Mongoose. Mongoose is able to connect to a MongoDB database and it will allow us to give a little bit more structure to our data by providing functionality in the form of models and schemas. Remember when we said that MongoDB is really free-form? Well, that's very helpful in some ways, but a little more structure allows us to do things with a lot more confidence in the integrity of our data. By converting our free-form MongoDB data into models, we are able to do things like validate, add associations, and run more intricate queries more effectively.




// Promises:

// Use native promises, because mongoose's promise functionality will be broken soon
mongoose.Promise = global.Promise;




// Setup:

var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/db-name-here');
// Note: If you connect to a database that doesn't exist, mongoose WILL create the DB for you!

var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})

// Note: If you create a model, mongoose WILL create the appropriate collection in your database for you! Even with the appropriate naming (plural for collection names)!

mongoose.model('User', UserSchema);
// We are setting this Schema in our Models as 'User'

var User = mongoose.model('User');
// We are retrieving this Schema from our Models, named 'User'




// Validations:

var UserSchema = new mongoose.Schema({
    first_name:  { type: String, required: true, minlength: 6},
    last_name: { type: String, required: true, maxlength: 20 },
    age: { type: Number, min: 1, max: 150 },
    email: { type: String, required: true }
}, {timestamps: true });

// Displaying validation errors:   
// Use express flash ("npm install --save express-flash") to display your errors. In order to use express flash messages, you must have session.




// Associations:

// Pretty much embedding documents. We can set up our schemas to expect arrays of objects from other schemas.

const PostSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Posts must have a title"]},
    content: {type: String, required: [true, "Posts must have content"]},
}, {timestamps: true})

const BlogSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Blogs must have a title"], minlength: [3, "Titles must have at least 3 characters"]},
    posts: [PostSchema]
}, {timestamps: true})

const UserSchema = new mongoose.Schema({
    first_name: {type: String, required: [true, "A first name is required"]},
    last_name: {type: String, required: [true, "A last name is required"]},
    blogs: [BlogSchema]
}, {timestamps: true})

// Couldn't be easier. Obviously, make sure to put the associated schema above the reference schema so it knows what to look to


const Blog = mongoose.Schema('Blog');
const User = mongoose.Schema('User');

Blog.create(req.body, function(err, data){
    if(err){
        // handle the error from creating a blog
    }
    else {
        User.findOneAndUpdate({_id: req.params.id}, {$push: {blogs: data}}, function(err, data){
            if(err){
                // handle the error from trying to update the user
            }
            else {
                // it worked! How shall we celebrate?
            }
        })
    }
})




// Model/Schema Methods:

// ...
var myModelSchema= new mongoose.Schema({
    name: {type:String}
    // info here!
    }, { timestamps: true }
);
// for older version, use the following timestamp
// { timestamps:
//     { createdAt: 'created_at' },
//     { updatedAt: 'updated_at'}
// });

// custom methods, pre, post etc. here
myModelSchema.methods.addJayToString = function(input){
    return input+"Jay";
}
// What pre does prior to saving:
// Starting with an instance of our model:
var MyModel = mongoose.model('myModelName');
var myModelInstance = new MyModel({name: "The Amazing "});
// When we try to save our model:
myModelInstance.save();
// Pre runs before saving. In the example below: It would add "Jay" to our current name ("The Amazing")" and "The Amazing Jay" would be stored in our DB.

myModelSchema.pre('save', function(done){
    this.name = this.addJayToString(this.name);
    done();
});

// We can also call the methods e.g. addJayToString directly on the instance, if we didn't want to use 'pre'.  e.g.
var MyModel = mongoose.model('myModelName');
var myModelInstance = new MyModel({name: "The Amazing "});
console.log(myModelInstance.addJayToString("hello "));
// This would just console.log "hello Jay";

mongoose.model('myModelName', myModelSchema);
//...




// Error Object:
err = {
    errors: {
        schemaInThing_that_had_error: {
            message:"some string of errors",
            kind:"what didn't work",
            path:"reference to the schema's name",
            value:"cause of the initial error"
        }
    },
    name: "Validation error"
}




// Custom Validations:

var mongoose       = require('mongoose');
var Schema         = mongoose.Schema;
var customerSchema = new Schema({
    name: {
        first: {
            type: String,
            required: [true, "this is for something else"],
            trim: true,
        },
        last: {
            type: String,
            required: true,
            trim: true
        },
    },
    phone: {
        type: String,
        validate: [{
            validator: function( number ) {
                return /\d{3}-\d{3}-\d{4}/.test( number );
            },
            message: "{ VALUE } is not a valid phone number"
            },  {
            validator: function( number ) {
                return false;
            },
            message: "{ VALUE } failed this validator"
            }
        ],
        required: [true, "Customer phone number required"]
    },
    gender: {
        type: String,
        enum: ['MALE', 'FEMALE'],
        uppercase: true,
        trim: true,
        default: "MALE"
    },
    age: {
        type: Number,
        min: [18, "Maybe you need to be a little older"],
        max: [85, "You might want to be enjoying your retirement rather than using this site"],
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 32,
        validate: {
            validator: function( value ) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
            },
            message: "Password failed validation, you must have at least 1 number, uppercase and special character"
        }
    },
    pets: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: "Pet"
        }],
        default: []
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

customerSchema.virtual( 'name.full' ).get( function () {
    return this.name.first + " " + this.name.last;
    // return `${ this.name.first } ${ this.name.last}`;
});