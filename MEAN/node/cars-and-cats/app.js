var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);
    
    // ~~~~~~~~~~~ VIEWS ~~~~~~~~~~~

    if(request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }



    else if(request.url === '/cats') {
        fs.readFile('views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }



    else if(request.url === '/cars/new') {
        fs.readFile('views/cars-new.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    
    // ~~~~~~~~~~~ STYLESHEET ~~~~~~~~~~~


    else if(request.url === '/style.css') {
        fs.readFile('stylesheets/style.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }

    // ~~~~~~~~~~~ IMAGES ~~~~~~~~~~~

    else if(request.url === '/images/cars/amli.jpg') {
        fs.readFile('images/cars/amli.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }



    else if(request.url === '/images/cars/old-car.jpg') {
        fs.readFile('images/cars/old-car.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }



    else if(request.url === '/images/cars/white-car.png') {
        fs.readFile('images/cars/white-car.png', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/png'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }



    else if(request.url === '/images/cats/fat-cat.jpg') {
        fs.readFile('images/cats/fat-cat.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }



    else if(request.url === '/images/cats/photogenic-cat.jpg') {
        fs.readFile('images/cats/photogenic-cat.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }



    else if(request.url === '/images/cats/smol-kit.jpg') {
        fs.readFile('images/cats/smol-kit.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }

    // request didn't match anything:
    
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});

server.listen(7077);
console.log("Running in localhost at port 7077");