const express = require('express');
const mongoose = require('mongoose');
const app = express();

const userRoutes = require("./routes/user");

require('dotenv').config();

// express way of setting body-parser for upcoming and sending data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// routers middleware
// localhost:7866/users
app.use('/users', userRoutes);

//database connections
const CONNECTION_URL = 'mongodb+srv://rozgaar:Rozgaar@123@nodeapi.fkf4p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';  

const port = process.env.PORT || 7866;

app.get('/', (req, res) => {
  res.send("Rozgaar API.");
})


mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
 .then(() => app.listen(port, () => console.log(`Server is listening at http://localhost:${port}`)))
 .catch((error) => console.log(error.message)); 

 mongoose.set('useFindAndModify', false);

//app.listen(port, () => console.log(`Server is listening at http://localhost:${port}`));