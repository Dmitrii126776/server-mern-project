import Task from './Model';

export default async function postTask(req, res) {
    try {
        if (!req.body.name || !req.body.created || !req.body.completed) {
            return res.status(400).json({ error: "Missing required fields" });
        }
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
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// import Task from './Model';
// export default function postTask(req, res) {
//     const newTask = new Task({
//         name: req.body.name,
//         created: {
//             date: req.body.created.date,
//             status: req.body.created.status,
//         },
//         completed: {
//             date: req.body.completed.date,
//             status: req.body.completed.status,
//         },
//     });
//
//     newTask
//         .save()
//         .then(response => {
//             res.status(201).json(`Task ${req.body.name} created ${req.body.created.date}`)
//         })
//         .catch(err => {
//             res.status(402).json(`Task was not created`)
//         })
//         .finally(() => {
//             console.log('END')
//         });
// }
