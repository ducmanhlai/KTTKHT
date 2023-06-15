import { Router } from "express";
import userController from "../controllers/userController";
const userRouter = Router();
const multer = require('multer');
const upload = multer();

userRouter.get('/getinfo', userController.getInfoUser)
userRouter.put('/update', upload.single('avatar'), userController.updateUser)
// userRouter.get('/analysis', userController.analysis)
export default userRouter