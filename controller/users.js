const UserModal = require ('../models/users');
 const bcrypt = require('bcrypt');
 const jwt = require('jsonwebtoken');

 


const userRegistration =  async( req, res) =>{
//  console.log(req.body);
//  const salt =bcrypt.genSaltSync(10);
//  const hash=bcrypt.hashSync(req.body.password,salt);
 const newUser = new UserModal({...req.body,});
 await newUser.save();
    res.json({
        success:true,
        massage:'User Successfully registered, please login to continue',
    });
};
const userLogin = async (req, res) => {
     console.log(req.body);
    const user= await UserModal.findOne({email: req.body.email});
    if(!user){
        return res.json({
            success: false,
            massage:"Invalid username or password",
        });
    }
    console.log(user.password);

 const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
//  console.log(isPasswordCorrect);

if (isPasswordCorrect) {
    const expiryTime = Math.floor(new Date().getTime() / 1000) + 3600; // 1 hour expiry from now
    const payload = {
        name: user.firstname,
        role: user.role,
        exp: expiryTime
    };
    const token = jwt.sign(payload, 'qwertyuioplkjhgfdsa147852369'); // Assuming JWT_SECRET is your secret key
return res.json({
        success: true,
        message: 'Login with token successful',
        token
    });
}res.json({
        success: false,
        massage:"Invalid username or password",
    });
};


const userLogout = async(req, res) => {
    
    res.json({
        success:true,
        massage:'Dummy User Logout API',
    });
};

const controllers ={
    userRegistration,
    userLogin,
    userLogout,
};
module.exports = controllers;