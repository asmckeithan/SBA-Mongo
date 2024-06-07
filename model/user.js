const mongoose = require('mongoose')

const userSchema = new mongoose.Schema ({
    name:String,
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

// // //a model is a class where we construct documents. the properties and behaviors are declared in the schema 
// // const userModel = mongoose.model('UserModel', userSchema)
// // //Next we create a document/profile 
// // const userDocument = new userModel ({name: Annesha});
// // console.log(Annesha.name)

module.exports = mongoose.model('User', userSchema);