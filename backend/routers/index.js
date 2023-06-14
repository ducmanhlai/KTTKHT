import authRouter from "./auth";
import heroRouter from "./hero";
import adminRouter from "./admin";
import skillRouter from "./skill";
import skinRouter from "./skin";
import paymentRouter from "./payment";
<<<<<<< HEAD
import userRouter from './user'
=======
import ruleRouter from "./rule";
import multer from "../middleware/multer";
>>>>>>> c8a9acc9d9facb122bd437533718a22a13d6cb43
import auth from '../middleware/authenJWT'
export default function router(app) {
   app.use('/api/v1/auth', authRouter);
   app.use('/api/v1/hero', multer.single('image'), heroRouter);
   app.use('/api/v1/admin', adminRouter);
   app.use('/api/v1/skill', skillRouter)
<<<<<<< HEAD
   app.use('/api/v1/skin', auth.authenUser, skinRouter);
   app.use("/api/v1/payment", paymentRouter)
   app.use("/api/v1/user", auth.authenUser, userRouter)
=======
   app.use('/api/v1/skin', skinRouter);
   app.use("/api/v1/rule", auth.authenAdmin, ruleRouter)
   app.use("/api/v1/payment", paymentRouter)
>>>>>>> c8a9acc9d9facb122bd437533718a22a13d6cb43
}
