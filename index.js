const express = require('express');
const cors =  require('cors');
const cookieParser  = require('cookie-parser');


const app = express();

  app.use(cookieParser());
  app.use(cors());
  const port = process.env.PORT || 3000;


  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })