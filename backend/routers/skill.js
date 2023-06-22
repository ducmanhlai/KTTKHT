import { Router } from "express";
import skillController from "../controllers/skillController";
import auth from "../middleware/authenJWT";
const skillRouter = Router();
skillRouter.post("/create", auth.authenAdmin, skillController.create);
skillRouter.get("/get", skillController.get);
skillRouter.put("/update", auth.authenAdmin, skillController.update); //auth.authenUser,
export default skillRouter;
