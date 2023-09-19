const express=require("express");
const { hadleUserSignup, hadleUserLogin } = require("../controller/userController");
const router=express.Router();



//GET
router.get("/logout",function(req,res){
return res.clearCookie("token").redirect("/")
})

router.post("/login",hadleUserLogin)
router.post("/signup",hadleUserSignup)



module.exports=router


//POST