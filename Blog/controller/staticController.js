const Blog = require("../modles/blog");

exports.renderHomepage = async function (req, res) {
  const allBlogs = await Blog.find({}).sort({ createdAt: -1 });
  return res.render("home", {
    User: req.user,
    blogs: allBlogs,
  });
};
exports.renderLoginPage = function (req, res) {
  if (req.user) return res.redirect("/");
  return res.render("login");
};
exports.renderSignupPage = function (req, res) {
  if (req.user) return res.redirect("/");

  return res.render("signup");
};
