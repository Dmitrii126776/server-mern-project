import {Router} from "express";
import postNumber from "./postNumber";
import getNumber from "./getNumber";
import updateNumber from "./updateNumber";

const numbersRouter = Router();


numbersRouter.post('/', postNumber)
numbersRouter.get('/', getNumber)
numbersRouter.patch('/', updateNumber)

export default numbersRouter;
