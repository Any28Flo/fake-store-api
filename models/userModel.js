const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userChema = new Schema({
        email: {type: String, required: true, unique: true, trim: true, maxLength: 50},
        password: {type: String, required: true, trim: true},
        favs : { type : Array , "default" : [] }
    },
    {
        timestamps: {createdAt: "created_at", updatedAt: "updated_at"}
    });

const User = mongoose.model('User', userChema);
module.exports = User;