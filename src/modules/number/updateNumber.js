// import Numbers from './Model';
//
// export default function updateNumber(req, res) {
//     Numbers.updateOne({}, {$set: {numberTask: req.body.numberTask}})
//         .then(result => {
//             res.status(202).json('Number was updated')
//         })
//         .catch(err => {
//             res.status(402).send('Number was not updated')
//         });
// }


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

//
// export default function updateNumber(req, res) {
//     Numbers.updateOne({numberTask: req.body.numberTask})
//         .exec()
//         .then(result => {
//             console.log(req.body)
//             console.log(req.body.numberTask)
//             res.status(202).json('Numbers was updated')
//         }).catch(err => {
//         res.status(402).send('Numbers was not updated')
//     });
// }

// export default function updateNumber(req, res) {
//     console.log('Received updated task number:', req.body.numberTask);
//     Numbers.updateOne({ numberTask: req.body.numberTask })
//         .exec()
//         .then(result => {
//             console.log('Number was updated:', result);
//             res.status(202).json('Numbers was updated')
//         }).catch(err => {
//         console.log('Error updating number:', err);
//         res.status(402).send('Numbers was not updated')
//     });
// }


//import Numbers from './Model';

// export default function updateNumber(newNumber) {
//     return Numbers.findOneAndUpdate({numberTask: newNumber}).exec();
// }

// return Numbers.findOneAndUpdate({}, { $set: { numberTask: newNumber }}, { new: true }).exec();
