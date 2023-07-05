import authRouter from "./auth";
import heroRouter from "./hero";
import adminRouter from "./admin";
import skillRouter from "./skill";
import skinRouter from "./skin";
import paymentRouter from "./payment";
import ruleRouter from "./rule";
import itemRouter from "./item";
import multer from "../middleware/multer";

import auth from "../middleware/authenJWT";
import userRouter from "./user";
export default function router(app) {
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/hero", heroRouter);
  app.use("/api/v1/admin", auth.authenAdmin, adminRouter);
  app.use("/api/v1/skill", skillRouter);
  app.use("/api/v1/skin", auth.authenUser, skinRouter);
  app.use("/api/v1/payment", paymentRouter);
  app.use("/api/v1/user", auth.authenUser, userRouter);

}
