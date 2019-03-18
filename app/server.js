const express = require('express');
const random = require('lodash/random');
const app = express();

app.get('/', (req, res) => {
  res.status(404).json({ msg: `Server is running now!!! ${random(1, 10)}` })
});

const port = 3000;

app.listen(port, () => console.log('Server running...'));