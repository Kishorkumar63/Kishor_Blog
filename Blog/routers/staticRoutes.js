const express = require("express");
const {
  renderLoginPage,
  renderHomepage,
  renderSignupPage,
} = require("../controller/staticController");
const router = express.Router();

//GET
router.get("/", renderHomepage);
router.get("/login", renderLoginPage);
router.get("/signup", renderSignupPage);

module.exports = router;

//POST
