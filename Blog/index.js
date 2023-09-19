
const express = require("express");
const app = express();
const mongoose=require("mongoose")
const path = require("path")
const cookieparser=require("cookie-parser")
const {checkFortoken}=require("./middleware/auth")
const bp=require("body-parser")
const userRouter = require("./routers/userRoutes");
const staticRouter = require("./routers/staticRoutes");
const blogRouter = require("./routers/blogRoutes");
mongoose.connect("mongodb://0.0.0.0:27017/k2Blog").then(() => console.log("Mongo connect")).catch((err) => {
    console.log(err);
})

//config

app.set("view engine","ejs")
app.use(express.static(path.resolve("./public")))
app.set("views",path.resolve("./views"))


//Middlware

app.use(bp.json())
app.use(cookieparser())
app.use(bp.urlencoded({extended:false}))
app.use(checkFortoken)

//Reg

app.use("/user",userRouter)
app.use("/",staticRouter)
app.use("/blog",blogRouter)





app.listen(8000,()=>{
    console.log("Server Running");
})