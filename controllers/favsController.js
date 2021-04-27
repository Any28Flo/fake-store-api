const jsonwebtoken = require('jsonwebtoken');
const User = require('../models/userModel');

exports.addFav = async (req, res) =>{
    const {idFav} = req.body
    const { jwt} = req.headers;
    try{
        //TODO : Refactor create function validate token
        const decodedToken = jsonwebtoken.verify(jwt, process.env.SECRET)
        if (!jwt || !decodedToken.id) {
            return res.status(400).json({ error: 'token missing or invalid' })
        }
        const user = await User.findById(decodedToken.id)

        const addNewFav = await  User.updateOne(  {"email": user.email}, { $push: { favs: idFav } })

        if (addNewFav) {
            return (
                res.status(200).json({
                    msg: 'added'
                }))
        }

    }catch (e){
        return (res.status(400).json({error: "Hubo un error"}))
    }

}