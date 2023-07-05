import { Router } from "express";
import ruleController from "../controllers/ruleController";
const ruleRouter = Router();
import auth from "../middleware/authenJWT";

ruleRouter.get('/get', ruleController.get);
ruleRouter.post('/create', auth.authenAdmin, ruleController.create);
ruleRouter.put('/update', auth.authenAdmin, ruleController.update)
export default ruleRouter