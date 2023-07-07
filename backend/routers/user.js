import { Router } from "express";
import userController from "../controllers/userController";
const userRouter = Router();
const multer = require("multer");
const upload = multer();
import auth from "../middleware/authenJWT";

userRouter.get("/getinfo", auth.authenUser, userController.getInfoUser);
userRouter.put(
  "/update",
  auth.authenUser,
  upload.single("avatar"),
  userController.updateUser
);
userRouter.get("/analysis", auth.authenUser, userController.analysis);
export default userRouter;
