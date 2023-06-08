import { Router } from "express";
import skinController from "../controllers/skinController";
const skinRouter = Router();
skinRouter.get('/get', skinController.get);
skinRouter.post('/create', skinController.create);
skinRouter.put('/update', skinController.update);
skinRouter.post('/buy', skinController.buy);
export default skinRouter