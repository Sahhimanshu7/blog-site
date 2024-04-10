import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';

export const loginUser = async (req, res, next) => {
  try {
    const user = await User.findOne({userName:req.body.userName});
        if(user){
           const validPassword = await bcryptjs.compare(req.body.password, user.password);
          if(validPassword){
             res.status(200).json(user);
           }else{
             res.status(400).json("Wrong Password");
           }
        }else{
          res.status(400).json("Username not Found!");
        }
  } catch (error) {
    next(errorHandler(500, error));
  }
}

export const signUpUser = async (req, res, next) => {
  try {
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(req.body.password, salt);
    // creating the user
        try {
          const newUser = new User({
            username: req.body.username,
            password: hashedPassword,
            email: req.body.email
          });
          const user = await newUser.save();
          res.status(200).json(user);
        } catch (error) {
          throw new Error("Error with creating newUser " + error);
      }
  } catch (error) {
    next(errorHandler(500, error));
  }
}