/* module to be used is http */
const http = require('http');
const port = 8000;
const fs = require('fs');

function requestHandler(req, res){
    console.log(req.url);
    res.writeHead(200, {'content-type': 'text/html'});
    let filePath;
    switch(req.url){
        case '/':
            filePath = './index.html'
            break;

        case '/':
            filePath = './profile.html'
            break; 

        default:
            filePath = './404/html'
    }
    fs.readFile(filePath, function(err, data){
        if(err){
            console.log('error', err);
            return res.end('<h1> Error !</h1>')
        }
        return res.end(data);
    });
    res.end('<h1>Gotcha</h1>');
    res.end('Gotcha !');
}
const server = http.createServer(requestHandler);
server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is up and running on port number: ", port);
});

/* basic node.js project is created using the command */
/* npm init */
/* package.json contains the dependencies and metadat of node project*/
/* we can run multiple node.js servers on a single machine*/
/* This command creates an instance of HTTP module in Node.js file: */
/* Answer: var http = require("http");*/
/* fs module canbe used for file specific operations*/




