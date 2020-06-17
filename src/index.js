const express = require('express');
const countries = require('countries-list');

const app = express();

app.get('/', (request, response) => {
  response.status(200).send('hola');
});

app.get('/country', (request, response) => {
  const { lang } = request.query;
  // eslint-disable-next-line no-console
  console.log(lang);
  response.json(countries[request.query.lang]);
});

app.get('*', (request, response) => {
  response.status(404).send('Page Not Found');
});

// var server = http.createServer(function (request, response) {
//   var parser = url.parse(request.url);
//   var pathname = parser.pathname;
//   var query = querystring.parse(parser.query);
//   console.log("var query", query);

//   if (pathname === "/") {
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.write("<html><body><p>Homa page</p></body></html>");
//     response.end();
//   } else if (pathname === "/hola") {
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.write(
//       "<html><body><p>a perro me estas saludando, hola wey</p></body></html>"
//     );
//     response.end();
//   } else if (pathname === "/countries") {
//     response.writeHead(200, { "Content-Type": "application/json" });
//     response.write(JSON.stringify(countries[query.country]));
//     response.end();
//   } else if (pathname === "/info") {
//     var rurl = info(pathname);
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.write(rurl);
//     response.end();
//   } else if (pathname === "/error") {
//     var rurl = error(pathname);
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.write(rurl);
//     response.end();
//   } else {
//     response.writeHead(404, { "Content-Type": "text/html" });
//     response.write("<html><body><p>not fund</p></body></html>");
//   }
// });

app.listen(8000, () => {
  // eslint-disable-next-line no-console
  console.log('running on http://127.0.0.1:8000');
});
