const { Router } = require("express");
const multer = require("multer");
const path = require("path");
const Blog = require("../modles/blog");
const { renderCreateBlogPage, createNewBlogPost, renderBlogPost } = require("../controller/blogController");
const router = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `./public/uploads/`);
  },
  filename: function (req, file, cb) {
    const fileName = `${req.user._id}-${Date.now()}-${file.originalname}` ;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

//GET

router.get("/create", renderCreateBlogPage)
router.get("/view/:id",renderBlogPost)
router.post("/create",upload.single("coverImage"),createNewBlogPost)




module.exports=router


//POST