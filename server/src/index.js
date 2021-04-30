const express = require('express');
const app = express();

const userRoutes = require("./routes/user");

//user 
const User = require('./models/user');

require('dotenv').config();

// Atlas DB connection
//  const connectAtlasDB = require('./db/AtlasDB').connectDB;
//  connectAtlasDB();

// Local DB connection
const connectLocalDB = require('./db/localDB').connectDB;
connectLocalDB();


// express way of setting body-parser for upcoming and sending data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers middleware
// localhost:7866/users
app.use('/users', userRoutes);



const port = process.env.PORT || 7866;

app.post('/users', (req,res)=>{

  console.log(req.body);
  const user = new User(req.body);
  user.save();
  res.send("hello ji ");
})

app.get('/', (req, res) => {
  res.send("Rozgaar API.");
})

app.listen(port, () => console.log(`Server is listening at http://localhost:${port}`));