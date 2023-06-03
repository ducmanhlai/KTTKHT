import authRouter from "./auth";
import heroRouter from "./hero";
export default function router(app){
   app.use('/api/v1/auth',authRouter);
   app.use('/api/v1/hero',heroRouter);
}
