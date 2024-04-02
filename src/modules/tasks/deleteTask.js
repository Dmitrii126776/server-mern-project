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
