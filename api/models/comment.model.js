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

    nextCommentId: {
        type: String,
        default: null
    }
},
{timestamps: true});

const Comment = mongoose.model("Comment", CommentSchema);

export default Comment;