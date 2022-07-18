//Imports Node http module
const http = require('http');

//Creates a server and stores it in var
//Call back function is fired everytime a request is made. req has the request info and res is the information coming back to the browser
const server = http.createServer((req, res) => {
  // Logs the url the user sent the request to as well as the method
  console.log(req.url, req.method);

  //Set header content type
  res.setHeader('Content-Type', 'text/plain');

  //Sends the text Hellow World back to the browser
  res.write('Hello World');

  //Ends the response
  res.end();
});

//The server is listing for requests on port 3000, localhost is host name and the call back function fires when the server starts listening
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});
