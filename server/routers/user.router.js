import { Router } from 'express';
import UserController from '../controllers/user.controller.js';

const router = Router();

router.get("/:id", UserController.getUserById);
router.put("/reset-password", UserController.resetPassword);
router.post("/sign-up", UserController.signUp);
router.post("/login", UserController.logIn);

export default router;