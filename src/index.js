var http = require("http");
var { info, error } = require("./modules/my-log");
var { countries } = require("countries-list");
var url = require("url");
var querystring = require("querystring");

var server = http.createServer(function (request, response) {
  var parser = url.parse(request.url);
  var pathname = parser.pathname;
  var query = querystring.parse(parser.query);
  console.log('var query',query);

  if (pathname === "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<html><body><p>Homa page</p></body></html>");
    response.end();
  } else if (pathname === "/hola") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(
      "<html><body><p>a perro me estas saludando, hola wey</p></body></html>"
    );
    response.end();
  } else if (pathname === "/countries") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(countries[query.country]));
    response.end();
  } else if (pathname === "/info") {
    var rurl = info(pathname);
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(rurl);
    response.end();
  } else if (pathname === "/error") {
    var rurl = error(pathname);
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(rurl);
    response.end();
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.write("<html><body><p>not fund</p></body></html>");
  }
});

server.listen(3000);

console.log("running on 4000");
