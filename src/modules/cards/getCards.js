import Card from './Model';

export default function getCards(req, res) {
    Card
        .find()
        .exec()
        .then(result => {
            res.status(202).json(result);
        }).catch(err => {
        console.log(err);
        res.status(400).json("Cards get all error")
    })
        .finally(() => {
            console.log("Cards get all END");
        })
}
