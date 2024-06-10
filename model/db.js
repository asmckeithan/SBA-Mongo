require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://asmckeithan:Q5ME2EhZba9PiA0S@firstcluster.shdprc6.mongodb.net/mongoose1', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected to MongoDB with Mongoose !");
    // Your database operations here
});

module.exports = mongoose