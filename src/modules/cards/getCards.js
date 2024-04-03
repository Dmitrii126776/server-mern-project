import Card from './Model';

export default function getCards(req, res) {
    Card
        .find()
        .exec()
        .then(result => {
            if (!result) {
                return res.status(404).send('Tasks not found')
            }
            res.status(200).json(result);
        }).catch(err => {
        console.log(err);
        console.error('Error updating task:', err);
        res.status(500).send('Internal Server Error');
    });
}
