import {Router} from "express";
import postNumber from "./postNumber";
import getNumber from "./getNumber";
// import updateNumber from "./updateNumber";
import updateNumberById from "./updateNumberById";

const numbersRouter = Router();


numbersRouter.post('/', postNumber)
numbersRouter.get('/', getNumber)
// numbersRouter.patch('/', updateNumber)
numbersRouter.patch('/:numberId', updateNumberById)

export default numbersRouter;
