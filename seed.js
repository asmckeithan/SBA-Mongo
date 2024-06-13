const mongoose = require('mongoose');
const seedUsers = require('./usersSeed');
const db = require('./model/db')
// Connect to the database
db.once('open', async () => {
  console.log('Connected to selected Database');
  await seedUsers(); // Seed the users
  mongoose.disconnect(); // Disconnect from the database
  console.log('Disconnected from database');
});
