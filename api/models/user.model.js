import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },

  picture: {
    type: String,
    default: 
      ""
  },

  firstname: {
    type: String,
  },

  lastname: {
    type: String,
  },

  DOB: {
    type: Date,
  },

  location: {
    type: String
  },

  subtitle: {
    type: String,
    max: 160
  },

  description: {
    type: String,
    max: 750
  },

  email:{
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  following: {
    type: Array,
    default: []
  },

  followers: {
    type: Array,
    default: []
  },

  savedPosts: {
    type: Array,
    default: []
  },

  uploadedPosts: {
    type: Array,
    default: []
  },

  savedBlogs: {
    type: Array,
    default: []
  },

  uploadedBlogs: {
    type: Array,
    default: []
  },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;
