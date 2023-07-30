const express = require('express');
const routerApi = require('./routes');
const os = require('os');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middleware/error.handler.js');

const IP = os.networkInterfaces().en0[1].address;
const app = express();

const port = 3000;

app.use(express.json());

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () =>
  console.log(`Example app listening at http://${IP}:${port}`)
);
