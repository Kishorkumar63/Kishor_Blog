const express=require("express")
const router=express.Router();
const multer  = require('multer')

const path=require("path")

const storage = multer({
    destination: function (req, file, cb) {
      cb(null, "../public/uploads/")
    },
    filename:function(req,file,cb)
    {
cb(null,file.filename)
    },
    // filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    //   cb(null, file.fieldname + '-' + uniqueSuffix)
    // }
  })
  const upload = multer({storage })

//GET
router.get("/create", function(req,res){
res.render("createBlog")
})
router.post("/create",upload.any(),function(req,res){
    console.log(req.body);
    return res.render("createBlog")
})




module.exports=router


//POST