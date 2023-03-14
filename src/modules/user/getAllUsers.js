import User from './Model'

export default function getAllUsers(req, res) {
    User
        .find()
        .exec()
        .then(result => {
            res.status(202).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json("Users get all error")
        })
        .finally(() => {
            console.log("User get all END");
        })
}
