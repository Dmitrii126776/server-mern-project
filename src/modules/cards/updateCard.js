import Card from './Model';

export default function updateCard(req, res) {
    const cardId = req.params.cardId;

    Card.findByIdAndUpdate(cardId, req.body, {new: true})
        .exec()
        .then(result => {
            if (!result) {
                return res.status(404).send('Card not found')
            }
            res.status(200).json(result)
        }).catch(err => {
        console.error('Error updating task:', err);
        res.status(500).send('Internal Server Error');
    });
}
/*
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
*/
