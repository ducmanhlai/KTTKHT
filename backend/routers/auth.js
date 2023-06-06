import { Router } from "express";
import authController from "../controllers/authController";
import auth from '../middleware/authenJWT'

const authRouter = Router();
authRouter.post('/login', authController.login)
authRouter.post('/signup', authController.signUp)
authRouter.post('/testmiddleware', auth.authenUser, authController.testMiddleware)


export default authRouter