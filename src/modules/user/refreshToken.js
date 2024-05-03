import tokenService from "../tokens/tokenService";
import User from "./Model";
import UserDto from "../dtos/userDto";

async function refresh(refreshToken) {
    if (!refreshToken) {
        return {error: 'Unauthorized'};
    }
    const userData = await tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);

    if (!userData || !tokenFromDb) {
        return {error: 'Unauthorized'};
    }

    const user = await User.findById(userData.id)
    const userDto = new UserDto(user)
    const tokens = tokenService.generateTokens({...userDto})

    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return {...tokens, user: userDto}
}


export default async function refreshToken(req, res, next) {
    try {
        const {refreshToken} = req.cookies;
        const userData = await refresh(refreshToken);
        if (userData.error) {
            return res.status(401).json({ error: userData.error });
        }
        res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
        return res.status(200).json(userData);
    } catch (e) {
        next(e)
        return res.status(500).json({error: 'Internal Server Error'});
    }
}
