const express = require('express');
const router = express.Router();
const userController = require('./../controllers/userController')
const favsController = require('./../controllers/favsController')

router.post('/login', userController.loginUser)

router.post('/register', userController.registerUser)

router.get('/get-favs', (req, res) =>{
    //get-favs
})
router.post('/add-fav', favsController.addFav)

module.exports = router;