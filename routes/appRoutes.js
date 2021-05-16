import express from 'express';
import * as appController from '../controllers/appController.js';

const router = express.Router();

router.get("/", (req, res) => {
    res.send("<h1>Hi</h1>");
})

// Routes
router.get("/api/blog", appController.app_index);
router.post("/api/blog", appController.app_create);
// router.get("/api/blog/:id", appController.app_search);
// router.delete("/api/blog/:id", appController.app_delete);

export default router;