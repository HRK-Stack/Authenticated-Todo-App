import express from 'express';
import { getUserProfile, login, register } from "../controllers/userController.js";
import {protect} from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login",login);
router.post("/register",register);
router.get("/profile",protect,getUserProfile);

export default router;