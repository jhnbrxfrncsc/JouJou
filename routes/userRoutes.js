import express from 'express';
import * as userController from '../controllers/userControllers.js';

const router = express.Router();

router.get("/", (req, res) => {
    res.send("<h1>User</h1>");
})

// Routes
router.get("/api/userss", userController.user_index);
router.post("/api/users", userController.user_signin);
router.post("/api/newUsers", userController.user_signup);

export default router;