import { Router } from "express";
import userController from "../controllers/userController";
const userRouter = Router();
userRouter.get('/getinfo', userController.getInfoUser)
userRouter.post('/blockuser?:id_account', userController.blockUser)
userRouter.post('/unlockuser?:id_account', userController.unlockUser)
export default userRouter