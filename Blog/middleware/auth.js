const { validToken } = require("../utils/auth");

exports.checkFortoken = (req, res, next) => {
  let token = req.cookies["token"];
  if (!token) return next();
  try {
    const userPayload = validToken(token);
    req.user = userPayload;
    next();
  } catch (error) {
    next();
  }
};
exports.onlyGrantAccessTo = function (role) {
  return function (req, res, next) {
    let token = req.cookies["token"];
    if (!token) return res.redirect("/");
    try {
      const userPayload = validToken(token);
      if (userPayload.role === role) {
        req.user = userPayload;
        next();
      } else {
        res.redirect("/");
      }
    } catch (error) {
      res.redirect("/");
    }
  };
};

exports.ensureAuthenticated = function (req, res, next) {
  if (!res.user) return res.redirect("/login");
  return next();
};
