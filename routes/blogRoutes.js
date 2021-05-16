import express from 'express';
import * as blogController from '../controllers/blogController.js';

const router = express.Router();

router.get("/", (req, res) => {
    res.send("<h1>Blog</h1>");
})

// Routes
router.get("/api/blogs", blogController.blog_index);
router.post("/api/blogs", blogController.blog_create);
// router.get("/api/blogs/:id", blogController.app_search);
// router.delete("/api/blogs/:id", blogController.app_delete);

export default router;