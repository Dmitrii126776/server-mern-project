import Numbers from './Model';

export default function getNumber() {
    return new Promise((resolve, reject) => {
        Numbers
            .findOne()

            .exec((err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
    });
}
//  .sort({numberTask: -1})
