const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyJWT = (req, res, next)=>{
    console.log(req, 'req');
    const authHeader = req.headers['authorization'];
    if(!authHeader) return res.sendStatus(401);
    console.log(authHeader, 'authheader');
    const token = authHeader.split(' ')[1];
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded)=>{
            console.log(token, 'token');
            console.log(err, 'err');
            if(err) return res.sendStatus(403); //invalid token
            req.user = decoded.username;
            next();
        }
    ) 
}

module.exports = verifyJWT;