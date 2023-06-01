import { Router } from "express";
import authRouter from "./auth";
export default function router(app){
   app.use('/api/v1/auth',authRouter)
}
