
const {Router} = require('express')
const router = Router()
// connecting user controls js file
const usersCtrl = require('../controllers/user');
//connecting to my user schema in database file 
const User = require('../model/user')

// Route to create a new user
router.post('/create', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        
        // Create a new user document using Mongoose
        const newUser = new User({
            username: username,
            email: email,
            password: password
        });
        
        // Save the user document to the database
        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read all users
async function getAllUsers() {
    return await User.find();
}

// Read a user by ID
async function getUserById(userId) {
    return await User.findById(userId);
}

// Update a user by ID
async function updateUser(userId, newData) {
    return await User.findByIdAndUpdate(userId, newData, { new: true });
}

// Delete a user by ID
async function deleteUser(userId) {
    return await User.findByIdAndDelete(userId);
}



module.exports = router;