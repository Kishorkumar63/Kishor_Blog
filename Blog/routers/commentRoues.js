const express = require("express");
const Comment = require("../modles/comment");
const { handleCreateComment } = require("../controller/commentController");
const { ensureAuthenticated } = require("../middleware/auth");
const router = express.Router();

router.post("/create", ensureAuthenticated, handleCreateComment);

module.exports = router;
