import { Router } from "express";
import adminController from "../controllers/adminController";
const adminRouter = Router();
import auth from "../middleware/authenJWT";

adminRouter.get("/getalluser", auth.authenAdmin, adminController.getAllUser);
adminRouter.post("/blockuser?:id_account", auth.authenAdmin, adminController.blockUser);
adminRouter.post("/unlockuser?:id_account", auth.authenAdmin, adminController.unlockUser);
export default adminRouter;
