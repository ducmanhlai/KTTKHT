import { Router } from "express";
import itemController from "../controllers/itemController";
const itemRouter = Router();
const multer = require('multer');
const upload = multer();
import auth from "../middleware/authenJWT";

itemRouter.post('/create', auth.authenAdmin, itemController.createItem);
export default itemRouter