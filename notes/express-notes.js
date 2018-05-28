// STATIC CONTENT / TEMPLATES

// Generally, there are two ways to serve HTML/CSS/JS -- through Static Content or Templates. 
// Static Content -- Serving a static HTML/CSS/JS file from the backend in response to a request.
// Templates -- Using a view/templating engine to generate HTML (PHP, embedded ruby, embedded JavaScript)



// Serving Static with Express

app.use(express.static(__dirname + "/static"));
// we would have a dir called static we place all the static HTML/CSS/JS files in.
// in their example, the route i used to access it from localhost was '/main.html'



// Serving Templates with Express 

// ~~~ CHECK OUT first-express PROJECT ~~~

// we use EJS - npm install ejs

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

// from here we hardcoded data to render when a certain url was req'd. in our '.ejs' file in the views, then, we use <% %> and <%= %> to embed JS in the html code.





// SOCKETS

// Servers also have one kind of listener, however they have three kinds of emitters. They can 
// 1) emit to all connected socket users, 
// 2) respond back directly to a client that initiated a socket message to us, and 
// 3) broadcast to all clients except for the one client that initiated a socket message to us. 


// Testing socket activities is an art form. The key points for testing socket stuff:

// * Use multiple browsers (Firefox and Chrome are the best tandem. Safari just isn't as good for debugging).
// * If you need multiple connections in the same browser, use an incognito/private browsing window. Not just another tab!!
// * When your server restarts, refresh every window. 
// * You do not need to wait to deploy to start testing your projects with multiple clients! Just go to your terminal and run the command ifconfig to find your ip address. Give this to a cohort mate and they can type that into their nav bar followed by a colon : and the port you are using to run your project, and you will be able to test your sockets with them. It will be something like 192.163.0.2:1337.