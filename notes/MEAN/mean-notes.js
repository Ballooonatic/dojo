// INSTALLATIONS

// npm init -y
// this command basically says: we are using this folder for an npm based project, (npm init), the (-y) says fill the package.json with the base information.

// Node               - nodejs.org manual download.                               [JS Server technology]
// NPM                - comes with node.                                          [node package manager]
// Nodemon            - npm install -g nodemon                                    [keeps your node server up and running when you fix crashes]
// Bower              - npm install -g bower                                      [front-end package manager]
// Express            - npm install express (don't -g install. just doesn’t work) [light, flexible node framework. makes routing a breeze]
// EJS                - npm install ejs (stands for Embedded JavaScript)          [templating engine. puts <script> tags to shame.]
// express-session    - npm install express-session                               [facilitates session data, lasting longer than the clients' connection.]
// body-parser        - npm install body-parser                                   [helps us handle post data. express can't]
// socket.io          - npm install socket.io                                     [facilitates realtime connection without http slowing us down]
// mongodb            - brew install mongodb                                      [BSON database. Basically JS. Super quick and scalable. NoSQL. See its section for more setup]
// mongoose           - npm install mongoose                                      [node module, accesses our mongodbs and provides structure for the data.]
// express-flash      - npm install express-flash                                 [displays mongoose validation errors. somehow mongoose didn't build that in. must have session to work.]
// bcrypt-as-promised - npm install bcrypt-as-promised                            [promisified bcrypt. encrypts sensitive info, and checks validity of hashes]
// angular            - npm install -g @angular/cli                               [opinionated TS front-end SPA framework. provides robust structure and tooling for large dev teams and projects.]


// passing "--save" after the name of the package will save it to your package.json so you can move this dependency configuration around to different projects easy peezy with:
// "npm install"







// FULL CODINGDOJO DEPENDENCY/MODULE/TECHNOLOGY LIST

// Nodemon
// Using nodemon instead of the node command in your terminal will automatically re-run your JavaScript file or project whenever you save something. That means no more manual server restarts!

// Bower
// To manage our front-end dependencies, we'll be using another package manager called bower. This will save us from having to hunt down the perfect CDN for important libraries like jQuery and Bootstrap.

// EJS
// Embedded Javascript is the templating engine we will use to render our views. When using EJS, your node server will take the .ejs file you wrote, parse through it, resolve all of the Javascript in the file, and then send a 'rendered' HTML page to the client. This is extra computation that the server will be required to do, and later we'll replace EJS with a full front end framework like Angular.

// Express
// Technically a Node module, but let's talk about it here too since it gets it's own letter in the acronym! Express is a wonderful set of tools that help us write rules for incoming HTTP requests. Express is arguably the most useful Node module in your collection, and only rarely will we not use it.

// express-session
// Session middleware for express. Stores data in the user session ID, lasting longer than the connection to the webpage

// express-flash
// Flash is an extension of connect-flash (somehow doesn't require it) with the ability to define a flash message and render it without redirecting the request. We use it for displaying mongoose validation errors. Requires session

// body-parser
// Guess what body-parser is used for? Parsing the body! We'll use this piece of middleware to parse information out of HTTP requests made to our server. Body-parser is incredibly flexible, and will be used to not only pull POST data out of requests, but can also snag data encoded into URLs via GET requests, and later you'll use body-parser to pull raw JSON.

// socket.io
// This node module will enable you to use web sockets within your application, we'll get into it more later. You will use socket.io for just this chapter!

// MongoDB
// BSON database technology. Super quick because it's not relational; each data piece doesn't have to be aware of the others. In SQL, you can't have data with as many rows and columns as the entry warrants; they all share the same table, and thus have to be handled differently, facilitating different tables with different values and expensive JOIN statements. Also, since MongoDB is based on JSON, it meshes gracefully with Node.

// Mongoose
// This is the node module that lets us connect to our MongoDB server (daemon) through node/express. It makes use of JavaScript's OOP, classes and objects to facilitate schemas, models of them, associations, validations, etc. providing structure to our data.

// bcrypt-as-promised
// This lets us encrypt things like passwords and check if they match encryption, as well as generate salts. Promisified.

// Angular 
// All-in-one, opinionated TypeScript based Single-Page-Application front-end framework. Well-suited for very large projects / teams due to the robust structure and pre-defined paradigms, if you will. Helps reduce server load by moving the responsibility of processing data into html from the server to the client. Instead of server-side rendering, client-side templating is utilized to facilitate the functionality of the app. This way, the server only has to send data back and forth, making the experience overall faster and therefore better for the user.







// RESTFUL ROUTING

// RESTful routing is an industry standard for routing regulation. Having this standard makes it much less of a headache to decipher everyones' patterns for GET and POST requests.

//     Action	                                Client HTTP Request	                        Server Routing Rule
// Retrieve all widgets	                'GET'    http://company.com/widgets	        app.get    ("/widgets",     (req, res) => {})
// Retrieve 1 widget with the id of 7	'GET'    http://company.com/widgets/7	    app.get    ("/widgets/:id", (req, res) => {})
// Create a widget	                    'POST'   http://company.com/widgets         app.post   ("/widgets",     (req, res) => {})
// Update 1 widget with the id of 7	    'PUT'    http://company.com/widgets/7       app.put    ("/widgets/:id", (req, res) => {})
// Delete 1 widget with the id of 7	    'DELETE' http://company.com/widgets/7	    app.delete ("/widgets/:id", (req, res) => {})

// 'PUT' is similar to a POST request, along with the ID passed through the URL, we will also send the new up-to-date object we want to use for the update.

// 'DELETE' is similar to a GET request, meaning we simply need the id of the widget we want to delete.

// For all other HTTP requests more unique than the list above, we would have to make our own custom routes. At least now we have a starting point, which is far better than starting from none.







// BCRYPT

const bcrypt = require('bcrypt-as-promised');

// ~~~ Hashing ~~~

bcrypt.hash('password_from_form', 10)
.then(hashed_password => {
    // do things with the pw
})
.catch(error => {
    // log error?
});

// Whats the '10'? - That's the saltrounds, the number of times the bcrypt library will generate a more complex hashed password. 10 is a good standard.

// ~~~ Validation ~~~

bcrypt.compare('password_from_form', 'stored_hashed_password')
.then( result => {
	// check if result is true?
})
.catch( error => {
	// log error?
})

// What is the 'result'? - It's the resulting boolean value of the operation. A result of true represents the password was correct.