const Comment = require("../modles/comment");
exports.handleCreateComment = async (req, res) => {
  if (!req.user) return res.json({ error: "User Not Logged In" });
  const { blogId, content } = req.body;
  const comment = await Comment.create({
    blogId,
    content,
    createdBy: req.user._id,
  });
  return res.json({ Message: "Success" });
};
