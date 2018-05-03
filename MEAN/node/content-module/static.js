const fs = require('fs')

module.exports = function(request, response) {
    if(request.url === '/'){
        fs.readFile('views/index.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    } else if(request.url === '/dojo'){
        fs.readFile('views/dojo.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    } else if(request.url === '/style.css'){
        fs.readFile('stylesheets/style.css', 'utf8', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(contents);
            response.end();
        });
    } else {
        response.end('File not found!!!');
    }

}