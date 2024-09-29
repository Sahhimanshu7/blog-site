import Blog from "../models/blog.model.js";
import Comment from "../models/comment.model.js";
import { errorHandler } from "../utils/error.js";

// create, read, update, and delete

// create
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
                res.status(400).json("Blog not found to add comment.")
            }
        } catch (error) {
            throw new Error("Error with creating new comment " + error);
        }
    } catch (error) {
        next(errorHandler(500, error));
    }
}