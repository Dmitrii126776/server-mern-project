import {Router} from "express";
import home from "./home";

const homeRouter = Router();

homeRouter.get('/', home)

export default homeRouter;
