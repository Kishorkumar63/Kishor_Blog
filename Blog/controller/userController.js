const User = require("../modles/user");
const Blog = require("../modles/blog");
const { generatedTokenUser } = require("../utils/auth");

exports.hadleUserLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) throw new Error("Enter the email Or Password ");
    const user = await User.findOne({ email });
    if (!user) throw new Error("  email Not Valid");
    if (user.password !== password) throw new Error("Password Not Valid");

    //token
    const token = await generatedTokenUser(user._id);
    console.log(token);

    return res.cookie("token", token).redirect("/");
  } catch (error) {
    return res.render("login", {
      error,
    });
  }
  // return res.render("login");
};
exports.hadleUserSignup = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    if (!fullName) throw new Error("Enter the Name");
    if (!email) throw new Error("Enter the Email");
    if (!password) throw new Error("Enter the Password && length 6");
    const user = await User.create({ fullName, email, password });
    const token = await generatedTokenUser(user._id);
    return res.cookie("token", token).redirect("/");
  } catch (error) {
    res.render("signup", {
      error,
    });
  }
};

exports.renderUserBlogs = async (req, res) => {
  if (!req.user) return res.redirect("/login");
  const blogs = await Blog.find({ createdBy: req.user._id });
  console.log(blogs);
  return res.render("userBlogs", {
    user: req.user,
    blogs,
  });
};
