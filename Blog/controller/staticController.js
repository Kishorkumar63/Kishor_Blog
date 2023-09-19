exports.renderHomepage=function(req,res){
    return res.render("home",{
        User : req.user,
    }) 
}
exports.renderLoginPage=function(req,res){ 
    if(req.user) return res.redirect("/")
    return res.render("login")
}
exports.renderSignupPage=function(req,res){
    if(req.user) return res.redirect("/")
   
    return res.render("signup")
}