export default function userLogout(req, res) {
    // res.cookie('token', '').send();
    res.cookie('token', '', { expires: new Date(0), httpOnly: true, secure: true, sameSite: 'strict' }).send();
}
