import bcrypt from "bcrypt";
import User from "./Model";
import jwt from "jsonwebtoken";

export default async function userLogin(req, res) {
    const {email, password, firstname} = req.body;
    try {
        const userInfo = await User.findOne({email}).select('+password');
        console.log(userInfo);
        if (!userInfo) {
            res.status(401).json({message: "Incorrect email or password"});
            // return;
        }

        const passOk = await bcrypt.compare(password, userInfo.password);
        console.log(passOk);
        if (passOk) {
            jwt.sign(
                {
                    id: userInfo._id,
                    email,
                    firstname,
                },
                process.env.JWT_ACCESS_SECRET,
                {expiresIn: "30d"},
                (err, token) => {
                    if (err) {
                        console.log(err);
                        res.sendStatus(500);
                    } else {
                        res.setHeader('Authorization', `Bearer ${token}`)
                        // res
                            // .cookie("token", token, {
                            //     maxAge: 30 * 24 * 60 * 60 * 1000,
                            //     httpOnly: true,
                            // })
                            .json({
                                id: userInfo._id,
                                user: {
                                    email: userInfo.email,
                                    firstname: userInfo.firstname,
                                },
                                token: token,
                                Authorization: `Bearer ${token}`,
                            });
                        res.sendStatus(201).join('User successfully login')
                        console.log("User successfully logged in");
                    }
                }
            );
        } else {
            res.status(401).json({message: "Incorrect email or password"});
        }
    } catch (error) {
        console.log(error);
        res.status(401).json({message: "Incorrect email or password"});
    }
}


// import bcrypt from "bcrypt";
// import User from "./Model";
// import jwt from "jsonwebtoken";

// export default  function userLogin(req, res) {
//     const {email, password, firstname} = req.body;
//     User.findOne({email})
//         .then(userInfo => {
//             console.log(userInfo);
//             if (!userInfo) {
//                 return res.status(401).send("User not found");
//             }
//             const passOk = bcrypt.compare(password, userInfo.password);
//             console.log(passOk);
//             console.log(password)
//             console.log(userInfo.password)
//             if (passOk) {
//                 jwt.sign({
//                     id: userInfo._id,
//                     email,
//                     firstname
//                 }, process.env.JWT_ACCESS_SECRET, {expiresIn: '30d'}, (err, token) => {
//                     if (err) {
//                         console.log(err)
//                         res.sendStatus(500)
//                     } else {
//                         res.cookie('token', token, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true}).json({
//                             id: userInfo._id,
//                             user: {
//                                 email: userInfo.email,
//                                 firstname: userInfo.firstname,
//                             },
//                             token: token,
//                             Authorization: `Bearer ${token}`
//                         });
//                         res.sendStatus(201).join('User successfully login')
//                     }
//                 })
//             } else {
//                 res.sendStatus(401)
//             }
//         })
// }
