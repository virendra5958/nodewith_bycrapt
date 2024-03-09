const UserModal = require ('../models/users');
 const bcrypt = require('bcrypt');


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
     //console.log(req.body);
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
 if(isPasswordCorrect){
    return res.json({
        success:true,
        massage: " Logged in Success"
    });
 };

    res.json({
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