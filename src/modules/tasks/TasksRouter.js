import {Router} from "express";
import postTask from "./postTask";
import getTasks from "./getTasks";
import updateTask from "./updateTask";
import deleteTask from "./deleteTask";
import getTaskById from "./getTaskById";

const tasksRouter = Router();

tasksRouter.get('/', getTasks);
tasksRouter.post('/', postTask);
tasksRouter.get('/:taskId', getTaskById);
tasksRouter.patch('/:taskId', updateTask);
tasksRouter.delete('/:taskId', deleteTask)

export default tasksRouter;
