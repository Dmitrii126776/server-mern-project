export default function userLogout(req, res) {
    res.cookie('token', '').send();
}
