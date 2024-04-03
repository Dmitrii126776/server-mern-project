import Card from "./Model.js"

export default function getCardById(req, res) {
    Card.findById(req.params.cardId)
        .then((result) => {
            if (!result) {
                return res.status(404).send('Card not found')
            }
            res.status(200).json(result)
        }).catch(err => {
        console.error('Error get card:', err);
        res.status(500).send('Internal Server Error');
    });
}
/*
export default function getCardById(req, res) {
    Card.findById(req.params.cardId)
        .then((card) => {
            if (card) {
                const {_id, taskNumber, name, assignee, description, status, priority} = card;
                // res.json({id: _id, taskNumber, name, assignee, description, status, priority})
                res.status(200).json({id: _id, taskNumber, name, assignee, description, status, priority})
            } else {
                res.status(404).send('Task not found');
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({message: "Internal server error"});
        });
}
*/
