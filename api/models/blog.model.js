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

    body: {
        type: String,
        required: true
    },

    likesCount: {
        type: Number,
        default: 0
    },

    commentIds: {
        type: String
    },

    authorId: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;