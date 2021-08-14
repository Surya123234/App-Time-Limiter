const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const corsOptions = cors({
  origin: '*',
})

app.use(corsOptions)

app.get('/', (req, res) => {
  res.send('Hello world');
})

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
})