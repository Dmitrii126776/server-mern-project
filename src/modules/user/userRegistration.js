import jwt from "jsonwebtoken";
import User from './Model';
import bcrypt from "bcrypt";

export default function userRegistration(req, res) {
    const {email, password, firstname} = req.body
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = new User({password: hashedPassword, email, firstname})
    user.save().then((userInfo => {
        jwt.sign({
            id: userInfo._id,
            email: userInfo.email,
            firstname: userInfo.firstname
        }, process.env.JWT_ACCESS_SECRET, {expiresIn: '30d'}, (err, token) => {
            if (err) {
                console.log(err)
                res.sendStatus(500)
            } else {
                console.log(password)
                console.log(hashedPassword)
                res.cookie('token', token, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true}).json({
                    id: userInfo._id,
                    user:{
                    email: userInfo.email,
                    firstname: userInfo.firstname,
                    },
                    token: token,
                    Authorization: `Bearer ${token}`
                })
            }
        })
    }))
}
