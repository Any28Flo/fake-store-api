const express = require('express');
const router = express.Router();

router.get('/login', async (req, res) => {
    try {
        res.send('login')    } catch (e) {
        console.log(e)
    }
})

router.get('/register', async (req, res) => {
    try {
        res.send('register')    } catch (e) {

    }
})
module.exports = router;