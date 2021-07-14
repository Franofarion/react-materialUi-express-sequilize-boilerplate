const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());

// TODO : check if dev mode
app.use(cors());

// routes
require('./routes')(app);

app.listen(port, () => {
  console.log(`server listening to http://localhost:${port}`);
});
