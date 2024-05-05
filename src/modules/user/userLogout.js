import tokenService from "../tokens/tokenService";

async function logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
}


export default async function userLogout(req, res, next) {
    try {
        const {refreshToken} = req.cookies;
        const token = await logout(refreshToken)
        res.clearCookie('refreshToken')
        // res.clearCookie('refreshToken', {httpOnly: true, sameSite: 'None', secure: true});
        return res.json(token)
    } catch (e) {
        console.log(e)
        next(e)
    }
}

// export default function userLogout(req, res) {
//     res.cookie('token', '').send();
//     // res.clearCookie('token', { httpOnly: true, sameSite: 'None', secure: true });
//     // res.cookie('token', '', { expires: new Date(0), httpOnly: true, secure: true, sameSite: 'strict' }).send();
//     // res.clearCookie('token').send();
// }
