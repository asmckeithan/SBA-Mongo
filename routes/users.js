
const {Router} = require('express')
const router = Router()
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


// Get all users
router.get('/', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: "Unable to find users" });
    }
  });
  
  // Get a single user by ID
  router.get('/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Update a user by ID
  router.put('/:id', async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Delete a user by ID
  router.delete('/:id', async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

module.exports = router;