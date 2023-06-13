import { Router } from "express";
import ruleController from "../controllers/ruleController";
const ruleRouter= Router();
ruleRouter.get('/get',ruleController.get);
ruleRouter.post('/create',ruleController.create);
ruleRouter.put('/update',ruleController.update)
export default ruleRouter