import express from "express";

import { createBlog, likeBlog, readBlog } from "../services/blog.js";

const router = express.Router();

router.route("/create-blog")
    .post(createBlog);

router.route("/read-blog/:id")
    .get(readBlog);

router.route("/like-blog/:id")
    .put(likeBlog);

export default router;