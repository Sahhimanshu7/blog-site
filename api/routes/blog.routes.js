import express from "express";

import { createBlog, readBlog } from "../services/blog.js";

const router = express.Router();

router.route("/create-blog")
    .post(createBlog);

router.route("/read-blog/:id")
    .get(readBlog);

export default router;