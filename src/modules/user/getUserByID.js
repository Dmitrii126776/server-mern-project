import User from "./Model.js";

export default function getUserByID(req, res) {
    User.findById(req.params.userId)
        .then((user) => {
            if (user) {
                const {_id, email, firstname} = user;
                res.json({id: _id, email, firstname});
            } else {
                res.status(404).json({message: "User not found"});
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({message: "Internal server error"});
        });
}
