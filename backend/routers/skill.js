import { Router } from "express";
import skillController from "../controllers/skillController";
import auth from '../middleware/authenJWT'
const skillRouter= Router();
skillRouter.post('/create',skillController.create);
skillRouter.get('/get',skillController.get)
skillRouter.put('/update',auth.authenUser,skillController.update)
export default skillRouter