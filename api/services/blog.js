import Blog from "../models/blog.model.js";
import { errorHandler } from "../utils/error.js";

// create, update, read, and delete.
// Search using title, subtitle, authorName, and categories

// create
export const createBlog = async (req, res, next) => {
    try {
        const { title, subTitle, body, category, authorId } = req.body;

        try {
            const newBlog = new Blog({
                title: title,
                subTitle: subTitle,
                body: body,
                category: category,
                authorId: authorId
            });

            const blog = await newBlog.save();
            res.status(201).json(blog);
        } catch (error) {
            throw new Error("Error with creating newBlog " + error);
        }
    } catch (error) {
        next(errorHandler(500, error));
    }
}

// read
export const readBlog = async (req, res, next) => {
    try {
        const { id } = req.params;

        try {
            const blog = await Blog.findById({ _id: id });

            if(blog) {
                res.status(200).json(blog);
            } else {
                res.status(400).json("The blog with id " + id + " was not found!");
            }
        } catch (error) {
            throw new Error("Error finding the blog " + error);
        }
    } catch (error) {
        next(errorHandler(500, error));
    }
}

// like the blog
export const likeBlog = async (req, res, next) => {
    try {
        const { id } = req.params;

        try {
            const blog = await Blog.findById({ _id: id});

            if(blog) {
                const oldLikes = blog.likesCount;
                const newLikes = oldLikes + 1;
                await Blog.findByIdAndUpdate(id, {$set:{ likesCount: newLikes}});
                res.status(201).json("The blog is liked.");
            } else {
                res.status(400).json("The blog was not found.")
            }
        } catch (error) {
            res.status(401).json("Error liking the blog with id " + id );
        }
    } catch (error) {
        next(errorHandler(500, error));
    }
}