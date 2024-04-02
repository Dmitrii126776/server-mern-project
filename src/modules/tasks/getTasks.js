import Task from './Model';

export default function getTasks(req, res) {
    Task
        .find()
        .exec()
        .then(result => {
            if (!result) {
                return res.status(404).send('Tasks not found')
            }
            res.status(200).json(result);
        }).catch(err => {
        console.error('Error get tasks:', err);
        res.status(500).send('Internal Server Error');
    });
}
