const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
       
    },
    lastname: {
        type: String,
       
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        
    },
});

userSchema.pre("save",function() {
     console.log(this.password);
    const salt = bcrypt.genSaltSync(5);
    const hash =  bcrypt.hashSync(this.password, salt);
    this.password = hash;
});

const UserModal = mongoose.model('Users', userSchema);


module.exports = UserModal;
