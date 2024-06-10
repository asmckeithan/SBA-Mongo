require('dotenv').config();
// Connecting the express server and storing inside the app variable------------------
const express = require('express');
// Creating the express server and storing inside the app variable
const app = express();

//connecting database file 
const mongoose = require('./model/db.js')

//connecting the schema file 
const User = require('./model/user.js')

// Port in which the server will run on ----------------------------------------------
const PORT = process.env.PORT || 8000;

// connecting to mongodb database using mongoose -------------------------------------
const database = require('./model/db.js')

// Configuring the server to accept and parse JSON data.
app.use(express.json());

//connecting user routes from routes/user.js
const userRouter = require('./routes/users.js');
//selecting the route path 
app.use('/users', userRouter);



//logs every request being made by displaying method
app.use((req, res, next) => {
  console.log(`A ${req.method} request was made to ${req.url}`);
  next();
});


app.get('/', (req, res) => {
  res.send('<h1>The Server is up and running </h1>');
});



// Error Handling Middlware=------------------------------------------------------
app.use((err, req, res, next) => {
  res.status(500).send('Something went wrong.');
});

// Calling the listen function telling the server to listen on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
