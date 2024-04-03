import Card from './Model';

export default function deleteCard(req, res) {
    const cardId = req.params.cardId;

    Card.deleteOne({_id: cardId})
        .exec()
        .then(result => {
            if (result.deletedCount === 1) {
                res.status(204).send();
                // res.status(200).json({ message: "Card deleted successfully", deletedCardId: cardId });
            } else {
                res.status(404).json({message: "Task not found"});
            }
        }).catch(err => {
        res.status(500).json({error: err.message});
    });
}
