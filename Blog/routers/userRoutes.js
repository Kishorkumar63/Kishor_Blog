const Blog=require("../modles/blog")

const express=require("express");
const { hadleUserSignup, hadleUserLogin, renderUserBlogs } = require("../controller/userController");
const { ensureAuthenticated } = require("../middleware/auth");
const router=express.Router();



//GET
router.get("/logout",function(req,res){
return res.clearCookie("token").redirect("/")
})

router.post("/login",hadleUserLogin)
router.post("/signup",hadleUserSignup)
router.get("/blogs",ensureAuthenticated,  renderUserBlogs)


module.exports=router


//POST