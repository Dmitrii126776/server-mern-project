import bcrypt from "bcrypt";
import User from "./Model";
import UserDto from "../dtos/userDto";
import tokenService from "../tokens/tokenService";

async function login(email, password) {
    const user = await User.findOne({email}).select('+password');
    if (!user) {
        return {error: `User with this email not found!`};
    }
    const passOk = await bcrypt.compare(password, user.password);
    if (!passOk) {
        return {error: `User with this password not found!`};
    }

    const userDto = new UserDto(user)
    const tokens = tokenService.generateTokens({...userDto})
    // const tokens = tokenService.generateTokens({email, id: userDto.id})
    await tokenService.saveToken(userDto.id, tokens.refreshToken)

    return {...tokens, user: userDto}
}

export default async function userLogin(req, res, next) {
    try {
        const {email, password} = req.body;
        const userData = await login(email, password)
        if (userData.error) {
            return res.status(401).json({message: userData.error});
        }
        res.cookie('refreshToken', userData.refreshToken, {
            maxAge: 30 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            // secure: true,
            // sameSite: 'None'
        })
        return res.json(userData)
    } catch (e) {
        next(e)
    }
}


// export default async function userLogin(req, res) {
//     const {email, password, firstname} = req.body;
//     try {
//         const userInfo = await User.findOne({email}).select('+password');
//         console.log(userInfo);
//         if (!userInfo) {
//             res.status(401).json({message: "Incorrect email or password"});
//             // return;
//         }
//
//         const passOk = await bcrypt.compare(password, userInfo.password);
//         console.log(passOk);
//         if (passOk) {
//             jwt.sign(
//                 {
//                     id: userInfo._id,
//                     email,
//                     firstname,
//                 },
//                 process.env.JWT_ACCESS_SECRET,
//                 {expiresIn: "30d"},
//                 (err, token) => {
//                     if (err) {
//                         console.log(err);
//                         res.sendStatus(500);
//                     } else {
//                         // res.setHeader('Authorization', `Bearer ${token}`)
//                         res.cookie("token", token, {
//                             maxAge: 30 * 24 * 60 * 60 * 1000,
//                             httpOnly: true,
//                             // sameSite: 'none',
//                             // secure: true,
//                         });
//                         res.status(201).json({
//                             id: userInfo._id,
//                             user: {
//                                 email: userInfo.email,
//                                 firstname: userInfo.firstname,
//                             },
//                             token: token,
//                         });
//                         console.log("User successfully logged in");
//                     }
//                 }
//             );
//         } else {
//             res.status(401).json({message: "Incorrect email or password"});
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(401).json({message: "Incorrect email or password"});
//     }
// }
