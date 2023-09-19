const jwt=require("jsonwebtoken")
const User=require("../modles/user")
const JWT_SECRET="kishor"
async function generatedTokenUser(id)
{
       const user =await User.findById(id)
       const payLoad={
        _id:user._id,
    email:user.email,
    fullName:user.fullName
       }
       
       const token=jwt.sign(payLoad,JWT_SECRET)
       return token
 
}

function validToken(token)
{
    return jwt.verify(token,JWT_SECRET)
    
}
module.exports={
    generatedTokenUser,
    validToken
}