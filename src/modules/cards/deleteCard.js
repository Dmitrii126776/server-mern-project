import Card from './Model';

export default function deleteCard(req, res) {
    const cardId = req.params.cardId;

    Card.deleteOne({_id: cardId})
        .exec()
        .then(result => {
            res.status(202).json('Card was deleted');
        }).catch(err => {
        res.status(402).send('Card was not deleted');
    });
}
