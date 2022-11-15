//Create a server
//http, url, path, os

const http = require("http");

const server = http.createServer((req, res)=> {
    //DRY- Do Not Repeat
    const endpoint = req.url;

    //----landing page or home page
    if(endpoint === "/" || endpoint === "/home") {
        res.end("We are in the puppy home page");
    } else if (endpoint === "/about") {
    //---about page for puppies
        res.end('Puppies about page');
    } else if (endpoint === "/adopt") {
    //---adopt a puppy page
        res.end('Adopt a puppy here');
    } else if (endpoint === "/contact") {
    //---contact page    
        res.end('Contact us today for more information')
    } else {
    //---404 page----if none of the endpoints are available.    
        res.end('Oops!...Page not found');
    }
});

const port = 4455;
const hostname = '127.0.0.1'; //this host name 127.0.0.1 can also be called localhost

//Listen to server, Port number, Create an endpoint

server.listen(port, hostname, () => {
    console.log('Server is up and running');
}) 

