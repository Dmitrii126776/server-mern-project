import Task from "./Model.js"

export default function getTaskById(req, res) {
    Task.findById(req.params.taskId)
        .then((result) => {
            if (!result) {
                return res.status(404).send('Task not found')
            }
            res.status(200).json(result)
        }).catch(err => {
        console.error('Error get task:', err);
        res.status(500).send('Internal Server Error');
    });
}
