import Numbers from './Model';

export default function postNumber(req, res) {
    const newNumber = new Numbers({
        numberTask: req.body.numberTask,
    });
    newNumber.save().then(response => {
        res.status(202).json(`Numbers ${req.body.numberTask} is created`);
    }).catch(err => {
        console.log(err);
        res.status(402).json(`Numbers was not created`);
    }).finally(() => {
        console.log("Status END");
    })
}
