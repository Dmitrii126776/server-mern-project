import Animal from './Model';

export default function getAnimals(req, res) {
    Animal.find()
        .exec()
        .then(result => {
            const reversed = result.reverse()
            res.status(202).json(reversed);
        }).catch(err => {
        console.log(err);
        res.status(400).json("Animals get all error")
    })
        .finally(() => {
            console.log("Animals get all END");
        })
}
        // .sort({_id: -1})
