import Animal from './Model';

export default function getAnimals(req, res) {
    Animal.find()
        .sort({_id: -1})
        .exec()
        .then(result => {
            res.status(202).json(result);
        }).catch(err => {
        console.log(err);
        res.status(400).json("Animals get all error")
    })
        .finally(() => {
            console.log("Animals get all END");
        })
}
