import jwt from "jsonwebtoken";
import tokenModal from "./Model.js";

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '1m'})
        const refreshToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '3m'})
        return {
            accessToken,
            refreshToken
        }
    }

    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
            return userData;
        } catch (e) {
            return null;
        }
    }

    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
            return userData;
        } catch (e) {
            return null;
        }
    }

    async findToken(refreshToken) {
        const tokenData = await tokenModal.findOne({refreshToken})
        return tokenData;
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await tokenModal.findOne({user: userId})
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        return await tokenModal.create({user: userId, refreshToken})
        // const token = await tokenModel.create({user: userId, refreshToken})
        // return token;
    }

    async removeToken(refreshToken) {
        const tokenData = await tokenModal.deleteOne({refreshToken})
        return tokenData;
    }
}

export default new TokenService();
