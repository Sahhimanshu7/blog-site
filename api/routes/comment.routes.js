import { createCommentOnBlog } from "../services/comment.js";
import express from "express";

const router = express.Router();

router.route("/create-comment-blog")
    .post(createCommentOnBlog);

export default router;