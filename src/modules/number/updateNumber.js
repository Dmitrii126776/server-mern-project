import Numbers from './Model';

export default function updateNumber(req, res) {
    Numbers.findOneAndUpdate(req.body)
        .exec()
        .then(result => {
            res.status(202).json('Numbers was updated')
        }).catch(err => {
        res.status(402).send('Numbers was not updated')
    });
}

//import Numbers from './Model';

// export default function updateNumber(newNumber) {
//     return Numbers.findOneAndUpdate({numberTask: newNumber}).exec();
// }

// return Numbers.findOneAndUpdate({}, { $set: { numberTask: newNumber }}, { new: true }).exec();
