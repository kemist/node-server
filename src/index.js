var http = require("http");
var fs = require("fs");
//create a server object:
/* http
  .createServer(function(req, res) {
    res.write("Kemical Sex"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
 */

var http = require("http");
var fs = require("fs");
http
  .createServer(function(req, res) {
    fs.readFile("page.html", function(err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(8080);
