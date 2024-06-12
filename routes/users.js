
const {Router} = require('express')
const router = Router()
// connecting user controls js file
const usersCtrl = require('../controllers/user');
//connecting to my user schema in database file 
const User = require('../model/user')

// Route to create a new user
router.post("/create", async (req, res) => {
    try {
        const newUser = new User (req.body);
        await newUser.save()
        .then((savedUser) => {
            console.log(savedUser);
            res.status(201).json({message: "User successfully saved"})
        }).catch((error) => {
            console.log(error);
            res.status(500).json({message: "Unable to create new user"})
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: " Unable to save new user" });
    }
});




module.exports = router;