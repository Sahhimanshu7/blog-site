import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    commenterId: {
        type: String,
        required: true
    },

    text: {
        type: String,
        required: true
    },

    likesCount: {
        type: Number,
        default: 0
    },

    nextCommentIds: {
        type: Array
    },
},
{timestamps: true});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;