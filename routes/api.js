const express = require('express');
const router = express.Router();
const userController = require('./../controllers/userController')

router.get('/login', async (req, res) => {
    try {
        res.send('login')    } catch (e) {
        console.log(e)
    }
})

router.post('/register', userController.registerUser)

module.exports = router;