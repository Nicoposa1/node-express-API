const express = require('express');
const routerApi = require('./routes');
const os = require('os');
const cors = require('cors');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middleware/error.handler.js');

const IP = os.networkInterfaces().en0[1].address;
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
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
app.use(cors(options));

app.get('/api', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/api/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});
app.listen(port, () =>
  console.log(`Example app listening at http://${IP}:${port}`)
);
