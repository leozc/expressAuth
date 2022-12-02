
//express basic authentication example
const app = require('express')()
const basicAuth = require('express-basic-auth')

app.use(basicAuth({
    users: { 'admin': '123456' },
    challenge: true,
    realm: 'xxxx',
    unauthorizedResponse: getUnauthorizedResponse
}))

app.get("/url", (req, res, next) => {
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

function getUnauthorizedResponse(req) {
    return req.auth
        ? ('Credentials ' + req.auth.user + ':' + req.auth.password + ' rejected')
        : 'GO AWAY K   No credentials provided'
}