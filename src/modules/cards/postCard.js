import Card from './Model';
import getNumber from "../number/getNumber";
import updateNumber from "../number/updateNumber";

export default function postCard(req, res) {
    getNumber().then(result => {
        const number = result.numberTask + 1;
        const taskNumber = `TC-${number}`;
        const newCard = new Card({
            taskNumber,
            name: req.body.name,
            assignee: req.body.assignee,
            description: req.body.description,
            status: req.body.status,
            priority: req.body.priority,
        });
        newCard
            .save()
            .then(response => {
                res.status(201).json(`Card ${req.body.name} assignee to ${req.body.assignee}`)
            }).catch(err => {
            res.status(402).json(`Task was not created`)
        })
            .finally(() => {
                console.log('END')
            });

        updateNumber(number)
            .exec()
            .then(result => {
                res.status(202).json('Numbers was updated')
            }).catch(err => {
            res.status(402).send('Numbers was not updated')
        });
    });
}

// import Card from './Model';
//
// export default async function postCard(req, res) {
//     try {
//         const count = await Card.countDocuments();
//         const taskNumber = `TC-34${(count + 1).toString().padStart(3, '0')}`;
//
//         const newCard = new Card({
//             taskNumber,
//             name: req.body.name,
//             assignee: req.body.assignee,
//             description: req.body.description,
//             status: req.body.status,
//             priority: req.body.priority,
//         });
//
//         const savedCard = await newCard.save();
//
//         res.status(201).json(`Card ${savedCard.name} assigned to ${savedCard.assignee}`);
//     } catch (err) {
//         res.status(400).json({message: err.message});
//     } finally {
//         console.log('END');
//     }
// }

