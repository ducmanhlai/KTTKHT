import authRouter from "./auth";
import heroRouter from "./hero";
import adminRouter from "./admin";
import skillRouter from "./skill";
import skinRouter from "./skin";
import paymentRouter from "./payment";
import ruleRouter from "./rule";
import multer from "../middleware/multer";
import auth from '../middleware/authenJWT'
export default function router(app) {
   app.use('/api/v1/auth', authRouter);
   app.use('/api/v1/hero', multer.single('image'), heroRouter);
   app.use('/api/v1/admin', adminRouter);
   app.use('/api/v1/skill', skillRouter)
   app.use('/api/v1/skin', skinRouter);
   app.use("/api/v1/rule", auth.authenAdmin, ruleRouter)
   app.use("/api/v1/payment", paymentRouter)
}
