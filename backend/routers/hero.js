import { Router } from "express";
import heroController from "../controllers/heroController";
const heroRouter = Router();
const multer = require('multer');
const upload = multer();

heroRouter.get('/get', heroController.get);
heroRouter.post('/create', upload.single('avatar'), heroController.createHero);
heroRouter.put('/update', upload.single('avatar'), heroController.updateHero);
export default heroRouter