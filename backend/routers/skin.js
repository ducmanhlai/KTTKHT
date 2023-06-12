import { Router } from "express";
import skinController from "../controllers/skinController";
import auth from '../middleware/authenJWT'
const skinRouter = Router();
skinRouter.get('/get', skinController.get);
skinRouter.post('/create', skinController.create);
skinRouter.put('/update', skinController.update);
skinRouter.post('/buy',auth.authenUser, skinController.buy);
export default skinRouter