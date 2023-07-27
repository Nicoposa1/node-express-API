const express = require('express');
const routerApi = require('./routes');
const os = require('os');

const IP = os.networkInterfaces().en0[1].address;
const app = express();

const port = 3000;

app.use(express.json());

routerApi(app);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () =>
  console.log(`Example app listening at http://${IP}:${port}`)
); // eslint-disable-line no-console
