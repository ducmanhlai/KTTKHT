import { Router } from "express";
import skillController from "../controllers/skillController";
<<<<<<< HEAD
const skillRouter = Router();
skillRouter.post('/create', skillController.create);
skillRouter.get('/get', skillController.get)
skillRouter.get('/getdetail', skillController.getDetail)
skillRouter.put('/update', skillController.update)
=======
import auth from '../middleware/authenJWT'
const skillRouter= Router();
skillRouter.post('/create',skillController.create);
skillRouter.get('/get',skillController.get)
skillRouter.put('/update',auth.authenUser,skillController.update)
>>>>>>> c8a9acc9d9facb122bd437533718a22a13d6cb43
export default skillRouter