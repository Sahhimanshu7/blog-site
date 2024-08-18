import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';

const searchUser = async (username) => {
  try {
    const user = await User.findOne({ username: username});
    if(user) return true;
    return false;
  } catch (error) {
    return "error occured!";
  }
}

export const loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if(searchUser(username)) {

    } else {
      res.status(400).json("Username not found!");
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

export const updateUser = async (req, res, next) => {
  try {
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(req.body.password, salt);
    const user = await User.findOne({_id: req.body.id});
    // updating the user
    try {
      await user.updateOne({username: req.body.username, password: hashedPassword, email: req.body.email});
      res.status(201).json("User updated!");
    } catch (error) {
      throw new Error("Error with updating the user " + error);
    }
  } catch (error) {
    next(errorHandler(500, error));
  }
}