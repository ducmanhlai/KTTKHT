import { Router } from "express";
import skinController from "../controllers/skinController";
import auth from '../middleware/authenJWT'
const skinRouter = Router();
const multer = require('multer');
const upload = multer();

skinRouter.get('/get', skinController.get);
skinRouter.post('/create', upload.single('avatar'), skinController.create);
skinRouter.put('/update', upload.single('avatar'), skinController.update);
skinRouter.post('/buy', auth.authenUser, skinController.buy);
export default skinRouter