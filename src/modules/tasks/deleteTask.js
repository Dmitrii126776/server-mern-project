import Task from './Model';

export default function deleteTask(req, res) {
    const taskId = req.params.taskId;

    Task.deleteOne({_id: taskId})
        .exec()
        .then(result => {
            res.status(202).json('Task was deleted');
        }).catch(err => {
        res.status(402).send('Task was not deleted');
    });
}
