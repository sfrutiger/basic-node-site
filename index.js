const app = require('http').createServer(createServer);
const fs = require('fs')
const url = require('url')

function createServer(req, res) {
    var path = url.parse(req.url).pathname;
    var fsCallback = function(error, data) {
        if(error) throw error;

        res.writeHead(200);
        res.write(data);
        res.end();
    }

    switch(path) {
        case '/about':
            doc = fs.readFile(__dirname + '/about.html', fsCallback);
        break;
        case '/contact-me':
            doc = fs.readFile(__dirname + '/contact-me.html', fsCallback);
        break;
        case '/':
            doc = fs.readFile(__dirname + '/index.html', fsCallback);
        break;
        default:
            doc = fs.readFile(__dirname + '/404.html', fsCallback);
        break;
    }
}

app.listen(8080);
