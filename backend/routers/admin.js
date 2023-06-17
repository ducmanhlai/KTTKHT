import { Router } from "express";
import adminController from "../controllers/adminController";
const adminRouter = Router();
adminRouter.get('/getalluser', adminController.getAllUser)
adminRouter.post('/blockuser?:id_account', adminController.blockUser)
adminRouter.post('/unlockuser?:id_account', adminController.unlockUser)
export default adminRouter