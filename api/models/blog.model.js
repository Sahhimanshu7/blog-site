import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 6
    },

    subTitle: {
        type: String,
    },

    picture: {
        type: String,
        default: 
        ""
    },

    
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;