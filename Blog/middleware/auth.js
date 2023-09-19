const { validToken } = require("../utils/auth");


exports.checkFortoken=(req,res,next)=>{
let token=req.cookies["token"];
if(!token) return next()
try {
    const userPayload=validToken(token)
    req.user=userPayload
    next()
} catch (error) {
    next()
}
}