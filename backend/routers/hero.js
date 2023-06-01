import { Router } from "express";
import heroController from "../controllers/heroController";
const heroRouter = Router();
heroRouter.get('/get',heroController.get);
heroRouter.post('/create',heroController.create);
heroRouter.put('/update',heroController.update);
export default heroRouter