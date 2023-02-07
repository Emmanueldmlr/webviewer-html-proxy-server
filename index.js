const express = require('express');
const cors =  require('cors');
const cookieParser  = require('cookie-parser');


const app = express();

  app.use(cookieParser());
  app.use(cors());

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(8000, () => {
    console.log(`Example app listening on port ${8000}`)
  })