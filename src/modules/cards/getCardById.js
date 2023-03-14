import Card from "./Model.js"

export default function getCardById(req, res) {
    Card.findById(req.params.cardId)
        .then((card) => {
            if (card) {
                const {_id, taskNumber, name, assignee, description, status, priority} = card;
                res.json({id: _id, taskNumber, name, assignee, description, status, priority})
            } else {
                res.status(404).json({message: "Card not found"});
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({message: "Internal server error"});
        });
}
