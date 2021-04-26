const User = require('../models/userModel');
const bcrypt = require('bcrypt');


exports.registerUser = async (req, res) => {
    const {name, email, password} = req.body;
    try {
        const salt = await bcrypt.genSaltSync(10);
        const hashPass = await bcrypt.hashSync(password, salt);
        const newUser = new User({
            name: name,
            email: email,
            password: hashPass
        })

        User.findOne({"email": email})

            .then(user => {
                if (user !== null) {
                    return (
                        res.status(400).json({
                            error: "Ya  existe"
                        }))
                }
            })
        newUser.save()
            .then((user) => {
                return(
                    res.status(200).json({
                        user: user
                    }))
                })

    } catch
        (e) {
        return res.status(400).json({error: e})

    }
}