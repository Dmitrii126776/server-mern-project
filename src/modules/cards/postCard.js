import Card from './Model';

export default function postCard(req, res) {

    const newCard = new Card({
        taskNumber: req.body.taskNumber,
        name: req.body.name,
        assignee: req.body.assignee,
        description: req.body.description,
        status: req.body.status,
        priority: req.body.priority,
    });
    newCard
        .save()
        .then(response => {
            res.status(201).json(`${req.body.taskNumber} assignee to ${req.body.assignee}`)
        }).catch(err => {
        res.status(402).json(`Task was not created`)
    })
        .finally(() => {
            console.log('END')
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

