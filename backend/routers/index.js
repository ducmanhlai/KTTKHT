import authRouter from "./auth";
import heroRouter from "./hero";
import adminRouter from "./admin";
export default function router(app){
   app.use('/api/v1/auth',authRouter);
   app.use('/api/v1/hero',heroRouter);
   app.use('/api/v1/admin',adminRouter);
}
