const User = require("Models/Users");
const bcrypt = require("bcryptjs");

//register new user
const registerUser = async(req,res) =>{
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt);
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword,
            location:req.body.location,
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            profilePicture:req.body.profilePicture,
        });
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (error) {
        console.log("An error occured while registering the user. \n", error);
        res.status(500).json(error);
    }
}

module.exports = {
    registerUser,
    
}