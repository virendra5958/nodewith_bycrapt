const jwt = require("jsonwebtoken");

const authMiddleware = (role) => (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // Extract token after "Bearer"
    const payload = jwt.verify(token, "qwertyuioplkjhgfdsa147852369");

    if (role.includes(payload.role)) {
      next();
    } else {
      res.status(403).json({
        success: false,
        message: "Forbidden: User does not have required role",
      });
    }
  } catch (err) {
    console.error(err);
    res.status(403).json({
      success: false,
      message: "Forbidden: Invalid or missing token",
    });
  }
};

module.exports = authMiddleware;
