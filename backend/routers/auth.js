import { Router } from "express";
import authController from "../controllers/authController";
const authRouter = Router();
authRouter.post('/login',authController.login)
authRouter.post('/signup',authController.signUp)
export default authRouter