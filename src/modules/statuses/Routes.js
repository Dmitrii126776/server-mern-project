import {Router} from "express";
import postStatuses from "./postStatuses";
import getStatuses from "./getStatuses";

const statusesRouter = Router();

statusesRouter.post('/', postStatuses)
statusesRouter.get('/', getStatuses)

export default statusesRouter;
