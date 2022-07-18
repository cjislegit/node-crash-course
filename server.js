//Imports Node http module
const http = require('http');

//Imports file system module
const fs = require('fs');

//Creates a server and stores it in var
//Call back function is fired everytime a request is made. req has the request info and res is the information coming back to the browser
const server = http.createServer((req, res) => {
  // Logs the url the user sent the request to as well as the method
  console.log(req.url, req.method);

  //Set header content type
  res.setHeader('Content-Type', 'text/html');

  //Send html file
  fs.readFile('./views/index.html', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      //Writes html file to the browser
      res.write(data);

      //Ends the response
      res.end();
    }
  });

  //Sends the text Hellow World back to the browser
  //res.write('Hello World');
});

//The server is listing for requests on port 3000, localhost is host name and the call back function fires when the server starts listening
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});
