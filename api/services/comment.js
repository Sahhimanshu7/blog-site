import Blog from "../models/blog.model.js";
import Comment from "../models/comment.model.js";
import { errorHandler } from "../utils/error.js";

// create, read, update, and delete

// create on the blog
export const createCommentOnBlog = async (req, res, next) => {
    try {
        const { id, commenterId, text } = req.body;

        try {
            const newComment = new Comment({
                commenterId: commenterId,
                text: text 
            });

            const comment = await newComment.save();
            const commentId = comment.id;
            
            try {
                await Blog.findByIdAndUpdate(id, {$push: {commentIds: commentId}}); 
                res.status(200).json(comment);
            } catch (error) {
                res.status(400).json("Blog not found to add comment." + error);
            }
        } catch (error) {
            throw new Error("Error with creating new comment " + error);
        }
    } catch (error) {
        next(errorHandler(500, error));
    }
}

// create on the comment
export const createCommentOnComment = async (req, res, next) => {
    try {
        const { primaryCommentId, commenterId, text } = req.body;

        try {
            const newComment = new Comment({
                commenterId: commenterId,
                text: text
            });

            const comment = await newComment.save();
            const commentId = comment.id;

            try {
                await Comment.findByIdAndUpdate(primaryCommentId, {$push: {nextCommentIds: commentId}});
            } catch (error) {
                res.status(400).json("The primary comment was not found." + error);
            }
        } catch (error) {
            throw new Error("Error with creating new comment " + error);
        }
    } catch (error) {
        next(errorHandler(500, error));
    }
}

// read the comment
export const readComment = async (req, res, next) => {
    try {
        const { id } = req.params;

        try {
            const comment = Comment.findById(id);
            if(comment) {
                res.status(200).json(comment);
            } else {
                res.status(400).json("Comment with id : " + id + " wasn't found.");
            }
        } catch (error) {
            throw new Error("Error reading the comment " + error);
        }
    } catch (error) {
        next(errorHandler(500, error));
    }
}
