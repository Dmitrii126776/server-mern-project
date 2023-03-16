import userRouter from "../user/Routes";
import statusesRouter from "../statuses/Routes"
import tasksRouter from "../tasks/TasksRouter";
import cardsRouter from "../cards/CardsRouter";
import animalsRouter from "../animals/AnimalsRouter";


export default function routes(app) {
   // app.use('/', userRouter)
    app.use('/statuses', statusesRouter)
    app.use('/tasks', tasksRouter)
    app.use('/cards', cardsRouter)
    app.use('/animals', animalsRouter)
}
