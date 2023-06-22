import { Router } from "express";
import heroController from "../controllers/heroController";
const heroRouter = Router();
const multer = require('multer');
const upload = multer();
import auth from "../middleware/authenJWT";

heroRouter.get('/get', heroController.get);
heroRouter.post('/create', auth.authenAdmin, upload.single('avatar'), heroController.createHero);
heroRouter.put('/update', auth.authenAdmin, upload.single('avatar'), heroController.updateHero);
export default heroRouter