var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);
    

    if(request.url === '/') {
        fs.readFile('html/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }


    else if(request.url === '/ninjas') {
        fs.readFile('html/ninjas.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }


    else if(request.url === '/dojos/new') {
        fs.readFile('html/dojos.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }


    else if(request.url === '/main.css') {
        fs.readFile('css/main.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'});  // send data about response
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

server.listen(6789);
console.log("Running in localhost at port 6789");