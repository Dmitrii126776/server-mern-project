import Task from './Model';
export default function postTask(req, res) {
    const newTask = new Task({
        name: req.body.name,
        created: {
            date: req.body.created.date,
            status: req.body.created.status,
        },
        completed: {
            date: req.body.completed.date,
            status: req.body.completed.status,
        },
    });

    newTask
        .save()
        .then(response => {
            res.status(201).json(`Task ${req.body.name} created ${req.body.created.date}`)
        })
        .catch(err => {
            res.status(402).json(`Task was not created`)
        })
        .finally(() => {
            console.log('END')
        });
}
