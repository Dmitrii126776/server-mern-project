import tokenService from "../tokens/tokenService";

export default function authMiddleware(req, res, next) {
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        const accessToken = authorizationHeader.split(' ')[1]

        if (!accessToken) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        const userData = tokenService.validateAccessToken(accessToken)
        if (!userData) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        req.user = userData;
        // console.log("userData ====> ", userData)
        next();
    } catch (e) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
