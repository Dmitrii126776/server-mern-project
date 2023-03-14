import Task from './Model';

export default function getTasks(req, res) {
    Task
        .find()
        .exec()
        .then(result => {
            res.status(202).json(result);
        }).catch(err => {
        console.log(err);
        res.status(400).json("Statuses get all error")
    })
        .finally(() => {
            console.log("Statuses get all END");
        })
}
