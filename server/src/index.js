const express = require('express');
const app = express();

require('dotenv').config()

const {DBconnection} = require('./db/mongoDB')
DBconnection();

const port = process.env.PORT || 7866;

app.get('/', (req, res) => {
  res.send("Bye");
})

app.listen(port, () => console.log(`Server is listening at http://localhost:${port}`));