const jwt = require('jsonwebtoken');
const JWT_Secret = "Amanisagoodbb$oy";// Idealy you should keep this safe not here. You may keep it in .env.variable file

fetch_user=(req,res,next)=>{ //next means the execution will be passed to next function or middleware after fetch_user() completes
    // Get the user from the JWT token and add id to req object
    const token = req.header('auth-token');//http header which you have to mention under headers while using thunderclient. you have to write auth-token instead of content-type and have to paste token there instead of json
    if(!token){
        res.status(401).send({error : "Please authenticate using a valid token"});// 401 is the status code for access denied
    }
    try {
        const data = jwt.verify(token,JWT_Secret);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({error : "Please authenticate using a valid token"});// 401 is the status code for access denied
    }
}

module.exports=fetch_user;