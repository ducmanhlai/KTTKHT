import { Router } from "express";
import skinController from "../controllers/skinController";
const skinRouter= Router();
skinRouter.post('/create',skinController.create);
skinRouter.get('/get',skinController.get)
skinRouter.put('/update',skinController.update)
export default skinRouter