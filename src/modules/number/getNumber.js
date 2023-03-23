import Numbers from './Model';

export default function getNumber(req, res) {
    Numbers
        .find()
        .exec()
        .then(result => {
            res.status(202).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json("Numbers get all error")
        })
        .finally(() => {
            console.log("Numbers get all END");
        })
}


// import Numbers from './Model';
//
// export default function getNumber() {
//     return new Promise((resolve, reject) => {
//         Numbers
//             .findOne()
//             .sort({numberTask: -1})
//             .exec((err, result) => {
//                 if (err) {
//                     reject(err);
//                 } else {
//                     resolve(result);
//                 }
//             });
//     });
// }

