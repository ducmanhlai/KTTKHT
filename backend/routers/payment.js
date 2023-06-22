import { Router } from "express";
import payController from "../controllers/payController";
const paymentRouter = Router();
import auth from "../middleware/authenJWT";

paymentRouter.post('/create', auth.authenUser, payController.createTransaction)
paymentRouter.get('/vnpay_ipn', auth.authenUser, payController.handleResult);
paymentRouter.get('/return', auth.authenUser, payController.showResult)
export default paymentRouter;
