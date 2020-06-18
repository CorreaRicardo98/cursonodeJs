const express = require('express');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');

const Routesv1 = require('./routes/v1/index');

dotenv.config();

console.log('MYSQL', process.env.host);

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

Routesv1(app);
const { port } = process.env;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  // eslint-disable-next-line no-template-curly-in-string
  console.log(`running on http://127.0.0.1:${port}`);
});
