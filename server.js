
// Connecting the express server and storing inside the app variable------------------
const express = require('express');
const app = express();

// Creating the express server and storing inside the app variable

// Port in which the server will run on ----------------------------------------------
const PORT = process.env.PORT || 8000;

// connecting to mongodb database using mongoose -------------------------------------
const database = require('./db.js')


// Configuring the server to accept and parse JSON data.
app.use(express.json());

//connecting user routes from routes/user.js
const userRouter = require('./routes/users.js');
//selecting the route path 
app.use('/api', userRouter);



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
