import { Router } from "express";
import authController from "../controllers/authController";
const authRouter = Router();
authRouter.post('/login', authController.login)
authRouter.post('/signup', authController.signUp)
authRouter.post('/admin/login',authController.loginAdmin)
export default authRouter