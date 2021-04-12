const express = require('express');
const app = express();

const {DBconnection} = require('./db/mongoDB')
DBconnection();

const userRoutes = require("./routes/user");

require('dotenv').config();

// express way of setting body-parser for upcoming and sending data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers middleware
// localhost:7866/users
app.use('/users', userRoutes);
const port = process.env.PORT || 7866;

app.get('/', (req, res) => {
  res.send("Rozgaar API.");
})

app.listen(port, () => console.log(`Server is listening at http://localhost:${port}`));