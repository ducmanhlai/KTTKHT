import { Router } from "express";
import heroController from "../controllers/heroController";
const heroRouter = Router();
heroRouter.get('/get',heroController.get);
heroRouter.post('/create',heroController.createHero);
heroRouter.put('/update',heroController.updateHero);
export default heroRouter