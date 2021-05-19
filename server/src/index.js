const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const userRoutes = require("./routes/user");
const jobRoutes = require("./routes/job");

require('dotenv').config();

// Local DB connection
const connectDB = require('./db/AtlasDB');
connectDB();


// express way of setting body-parser for upcoming and sending data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routers middleware
// localhost:7866/user
app.use('/user', userRoutes);
app.use('/job', jobRoutes);


const port = process.env.PORT || 7866;

app.get('/', (req, res) => {
  res.send("Rozgaar API.");
})

app.listen(port, () => console.log(`Server is listening at http://localhost:${port}`));
