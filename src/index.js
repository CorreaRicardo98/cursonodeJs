const express = require('express');
const bodyparser = require('body-parser');

const Routesv1 = require('./routes/v1/index');

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json);

Routesv1(app);

app.listen(10000, () => {
  // eslint-disable-next-line no-console
  console.log('running on http://127.0.0.1:10000');
});
