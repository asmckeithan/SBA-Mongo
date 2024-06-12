const mongoose = require('mongoose')


//creating the structure of the document we want to have 
//Schema is meant to protray a login or signup form 
const userSchema = new mongoose.Schema ({
    name:String,
    username: String,
    age: Number,
    email:{
        type: String,
        required: true,
        lowercase: true
        
    },
    startDate: Date,
    updateDate: Date,

})
const addressSchema = new mongoose.Schema({
    street: String,
    city: String,
    state: String,
    zipcode: String
    
})



// Export User model
const User = mongoose.model('User', userSchema);
const Address = mongoose.model('Address', addressSchema);



module.exports = { User, Address };