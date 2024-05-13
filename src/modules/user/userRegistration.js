import User from './Model';
import bcrypt from "bcrypt";
import tokenService from "../tokens/tokenService";
import UserDto from "../dtos/userDto";


async function registration(email, password, firstname, avatar) {
    const candidate = await User.findOne({email})
    if (candidate) {
        // throw Error(`User with this ${email} already exists!`)
        return {error: `User email already exists!`};
    }
    const hashedPassword = await bcrypt.hashSync(password, 10);
    const user = await User.create({email, firstname, avatar, password: hashedPassword})

    const userDto = new UserDto(user)
    const tokens = tokenService.generateTokens({...userDto})
    await tokenService.saveToken(userDto.id, tokens.refreshToken)

    return {...tokens, user: userDto}
}

export default async function userRegistration(req, res, next) {
    try {
        const {email, password, firstname, avatar} = req.body;
        const userData = await registration(email, password, firstname, avatar)
        if (userData.error) {
            // User already exists, return 401 Unauthorized status with the error message
            return res.status(409).json({message: userData.error});
        }
        res.cookie('refreshToken', userData.refreshToken, {
            maxAge: 30 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: true,
            sameSite: 'None'
        })
        return res.json(userData)
    } catch (e) {
        next(e)
    }
}


// export default function userRegistration(req, res) {
//     const {email, password, firstname} = req.body
//     const hashedPassword = bcrypt.hashSync(password, 10);
//     const user = new User({password: hashedPassword, email, firstname})
//     user.save().then((userInfo => {
//         jwt.sign({
//             id: userInfo._id,
//             email: userInfo.email,
//             firstname: userInfo.firstname
//         }, process.env.JWT_ACCESS_SECRET, {expiresIn: '30d'}, (err, token) => {
//             if (err) {
//                 console.log(err)
//                 res.sendStatus(500)
//             } else {
//                 console.log(password)
//                 console.log(hashedPassword)
//                 res.cookie('token', token, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true}).json({
//                     id: userInfo._id,
//                     user:{
//                     email: userInfo.email,
//                     firstname: userInfo.firstname,
//                     },
//                     token: token,
//                     Authorization: `Bearer ${token}`
//                 })
//             }
//         })
//     }))
// }
