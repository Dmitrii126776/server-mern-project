import Numbers from './Model';

export default function updateNumberById(req, res) {
    const numberId = req.params.numberId;

    Numbers.findByIdAndUpdate(numberId, req.body)
        .exec()
        .then(result => {
            res.status(202).json('numberId was updated')
        }).catch(err => {
        res.status(402).send('numberId was not updated')
    });
}
