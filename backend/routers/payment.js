import { Router } from "express";
import payController from "../controllers/payController";
const paymentRouter= Router();
paymentRouter.post('/create',payController.createTransaction)
paymentRouter.get('/vnpay_ipn',payController.handleResult);
paymentRouter.get('/return',payController.showResult)
export default paymentRouter;
