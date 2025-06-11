import express from 'express';
import { createTodo, deleteTodo, getAllTodo, updateTodo } from "../controllers/todoController.js";
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect);

router.post("/create",createTodo);
router.get("/getAll",getAllTodo);
router.put("/update/:id",updateTodo);
router.delete("/delete/:id",deleteTodo);

export default router;