const express = require('express');
const routerApi = require('./routes');
const os = require('os');
const cors = require('cors');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middleware/error.handler.js');

const whiteList = [
  'http://localhost:8080',
  'https://myapp.co',
  'http://nicoposa.com',
];

const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitdo'));
    }
  },
};

const IP = os.networkInterfaces().en0[1].address;
const app = express();

const port = 3000;

app.use(express.json());

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () =>
  console.log(`Example app listening at http://${IP}:${port}`)
);
