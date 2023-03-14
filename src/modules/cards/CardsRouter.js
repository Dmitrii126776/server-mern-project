import {Router} from "express";
import postCard from "./postCard";
import getCards from "./getCards";
import updateCard from "./updateCard";
import deleteCard from "./deleteCard";
import getCardById from "./getCardById";

const cardsRouter = Router();

cardsRouter.get('/', getCards);
cardsRouter.post('/', postCard);
cardsRouter.get('/:cardId', getCardById)
cardsRouter.patch('/:cardId', updateCard);
cardsRouter.delete('/:cardId', deleteCard)
export default cardsRouter;
