import { Router } from "express";
import userController from "../controllers/userController";
const userRouter = Router();
userRouter.get('/getinfo', userController.getInfoUser)
userRouter.put('/update', userController.updateUser)
userRouter.post('/unlockuser?:id_account', userController.unlockUser)
export default userRouter