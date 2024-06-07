
const {Router} = require('express')
const router = Router()
// connecting user controls js file
const usersCtrl = require('../controllers/user');

router.post('/users', async (req, res) => {
    const { name, email, age } = req.body;
  
    try {
      const user = new User({ name, email, age });
      await user.save();
      res.send(user);
    } catch (error) {
      console.error(error);
      res.status(404).send(error);
    }
  });


module.exports = router;