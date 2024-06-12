require('dotenv').config();
// Connecting the express server and storing inside the app variable------------------
const express = require('express');
// Creating the express server and storing inside the app variable
const app = express();

//connecting database file 
const mongoose = require('./model/db.js')

//connecting the schema file 
const {User} = require('./model/user.js')

// Port in which the server will run on ----------------------------------------------
const PORT = process.env.PORT || 8000;


// Configuring the server to accept and parse JSON data.
app.use(express.json());

//connecting user routes from routes/user.js
const userRouter = require('./routes/users.js');
//selecting the route path 
app.use('/users', userRouter)



//logs every request being made by displaying method
app.use((req, res, next) => {
  console.log(`A ${req.method} request was made to ${req.url}`);
  next();
});


app.get('/', (req, res) => {
  res.send('<h1>The Server is up and running </h1>');
});


// Routes
app.post('/users', async (req, res) => {
  try {
      const newUser = await createUser(req.body);
      res.status(201).json(newUser);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

app.get('/users', async (req, res) => {
  try {
      const users = await getAllUsers();
      res.json(users);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

app.get('/users/:id', async (req, res) => {
  try {
      const user = await getUserById(req.params.id);
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

app.put('/users/:id', async (req, res) => {
  try {
      const updatedUser = await updateUser(req.params.id, req.body);
      res.json(updatedUser);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

app.delete('/users/:id', async (req, res) => {
  try {
      await deleteUser(req.params.id);
      res.json({ message: 'User deleted successfully' });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});



// Error Handling Middlware=------------------------------------------------------
app.use((err, req, res, next) => {
  res.status(500).send('Something went wrong.');
});



// Calling the listen function telling the server to listen on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
