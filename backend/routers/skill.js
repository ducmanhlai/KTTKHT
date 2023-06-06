import { Router } from "express";
import skillController from "../controllers/skillController";
const skillRouter= Router();
skillRouter.post('/create',skillController.create);
skillRouter.get('/get',skillController.get)
export default skillRouter