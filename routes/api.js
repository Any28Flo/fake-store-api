const express = require('express');
const router = express.Router();
const userController = require('./../controllers/userController')
const favsController = require('./../controllers/favsController')

router.post('/login', userController.loginUser)

router.post('/register', userController.registerUser)

router.get('/get-favs', favsController.getFavs)
router.post('/add-fav', favsController.addFav)

module.exports = router;