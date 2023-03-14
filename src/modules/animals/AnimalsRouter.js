import {Router} from "express";
import postAnimal from "./postAnimal";
import getAnimals from "./getAnimals";
import getAnimalById from "./getAnimalById";

const animalsRouter = Router();

animalsRouter.post('/', postAnimal);
animalsRouter.get('/', getAnimals)
animalsRouter.get('/:animalId', getAnimalById)

export default animalsRouter;
