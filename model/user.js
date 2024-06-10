const mongoose = require('mongoose')

const userSchema = new mongoose.Schema ({
    name:String,
    username: String,
    age: Number,
    email:{
        type: String,
        required: true,
        lowercase: true,
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



module.exports = mongoose.model('User', userSchema);