import Task from './Model';

export default function deleteTask(req, res) {
    const taskId = req.params.taskId;

    Task.deleteOne({_id: taskId})
        .exec()
        .then(result => {
            if (result.deletedCount === 1) {
                res.status(204).send();
                // res.status(200).json({ message: "Task deleted successfully", deletedTaskId: taskId });
            } else {
                res.status(404).json({ message: "Task not found" });
            }
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
}

// import Task from './Model';
//
// export default function deleteTask(req, res) {
//     const taskId = req.params.taskId;
//
//     Task.deleteOne({_id: taskId})
//         .exec()
//         .then(result => {
//             // res.status(202).json('Task was deleted');
//             res.status(202).json(result);
//         }).catch(err => {
//         res.status(402).send('Task was not deleted');
//     });
// }
