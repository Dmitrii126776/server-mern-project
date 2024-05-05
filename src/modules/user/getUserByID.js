import User from "./Model.js";

export default function getUserByID(req, res) {
    User.findById(req.params.userId)
        .then((user) => {
            if (user) {
                const {_id, email, firstname, avatar} = user;
                res.status(200).json({id: _id, email, firstname, avatar})
            } else {
                res.status(404).json({message: "User not found"});
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(400).json({message: "Bad request"});
        });
}
