const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const User = require('../models/userModel');


exports.registerUser = async (req, res) => {
    const {email, password} = req.body;
    try {
        const salt = await bcrypt.genSaltSync(10);
        const hashPass = await bcrypt.hashSync(password, salt);


        const user = await User.findOne({"email": email})
        if (user !== null) {
            return (res.status(401).json({
                error: 'Ya existe el usuario'
            }))
        }
        const newUser = new User({
            email: email,
            password: hashPass,
            favs : []
        })
        const dbUser = await newUser.save();

        const userForToken = {
            username: dbUser.email,
            id: dbUser._id,
        }

        const token = await jwt.sign(userForToken, process.env.SECRET)


        if (dbUser) {
            console.log(dbUser);
            return (
                res.status(200).json({
                    user: dbUser.email,
                    token: token
                }))
        }

    } catch (e) {
        return (res.status(400).json({error: "Hubo un error"}))
    }
}
exports.loginUser = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email: email})
    const passwordCorrect = user === null
        ? false
        : await bcrypt.compare(password, user.password)

    if(!(user && passwordCorrect)){
        return res.status(400).json({
            error : 'invalid username or password'
        })
    }
    const userForToken = {
        username: user.email,
        id: user._id,
    }
    const token = await jwt.sign(userForToken, process.env.SECRET)

    res.status(200).json({
        user: user.email,
        token: token
    })



}