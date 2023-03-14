import Card from './Model';

export default function updateCard(req, res) {
    const cardId = req.params.cardId;

    Card.findByIdAndUpdate(cardId, req.body)
        .exec()
        .then(result => {
            res.status(202).json('Card was updated')
        }).catch(err => {
        res.status(402).send('Card was not updated')
    });
}
