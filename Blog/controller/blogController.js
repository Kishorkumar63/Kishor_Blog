const Blog=require("../modles/blog")

exports.renderCreateBlogPage=async(req,res)=>{
    res.render("createBlog",{
        User : req.user,
      })
}
exports.createNewBlogPost=async(req,res)=>
{
   const {title,content,coverImage}=req.body;
try {
    if(!title || !content) throw new Error("All Fileds Are mandatory")
   
  const blog= await Blog.create({
      title,
      content,
      coverImage:req.file.filename,
      createdBy:req.user._id
    })
   return res.render("createBlog",{
        Message:"Blog Created Success"
       })
    
} catch (error) {
    res.render("createBlog",{
       error
      })
      console.log(error);
}
}
exports.renderBlogPost=async(req,res)=>
{
 
try {
  const id=req.params.id
 const blog= await Blog.findById(id).populate("createdBy")
 console.log(blog);
 return res.render("blog",{
  User:req.user,
  blog,

 })
  
} catch (error) {
  res.render("home")
}
}