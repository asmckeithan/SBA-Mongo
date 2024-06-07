const mongoose = require('mongoose'); //requiring this file to use the installed mongoose 

const MONGO_URI = 'mongodb+srv://asmckeithan:Q5ME2EhZba9PiA0S@firstcluster.shdprc6.mongodb.net/?retryWrites=true&w=majority&appName=FirstCluster'; // connection String 

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
