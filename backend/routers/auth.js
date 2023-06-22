import { Router } from "express";
import authController from "../controllers/authController";
import auth from "../middleware/authenJWT";

const authRouter = Router();
authRouter.post("/login", authController.login);
authRouter.post("/signup", authController.signUp);
authRouter.post(
  "/testmiddleware",
  auth.authenUser,
  authController.testMiddleware
);
authRouter.put(
  "/changepassword",
  auth.authenUser,
  authController.changePassword
);
authRouter.post("/forgotpassword", authController.forgotPassword);
authRouter.post(
  "/checkcode?:id_account",
  authController.checkCodeForgotPassword
);
authRouter.put(
  "/changeforgotpassword?:id_account",
  authController.changeForgotPassword
);
authRouter.post("/refresh", authController.refreshToken);

export default authRouter;
