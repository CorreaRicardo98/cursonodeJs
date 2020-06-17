const express = require('express');
const { countries, languages } = require('countries-list');

const app = express();

app.get('/', (request, response) => {
  response.status(200).send('hola');
});

app.get('/country', (request, response) => {
  // eslint-disable-next-line no-console
  console.log(request.query);
  response.send(JSON.stringify(countries[request.query.code]));
});

app.get('/languages/:lang', (request, response) => {
  const lang = languages[request.params.lang];

  if (lang) {
    response.json(lang);
  } else {
    response.status(400).send('NOT FOUND');
  }
  // eslint-disable-next-line no-console
  console.log(request.params);
});

app.get('*', (request, response) => {
  response.status(404).send('Page Not Found');
});

app.listen(10000, () => {
  // eslint-disable-next-line no-console
  console.log('running on http://127.0.0.1:10000');
});
