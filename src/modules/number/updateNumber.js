import Numbers from './Model';

export default function updateNumber(req, res) {
    console.log(req.body)
    Numbers.updateOne(req.body)
        .exec()
        .then(result => {
            console.log('Number was updated:', result);
            res.status(202).json('Number was updated')
        }).catch(err => {
        res.status(402).send('Number was not updated')
    });
}
