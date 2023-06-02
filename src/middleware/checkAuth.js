const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const checkAuth = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({
      message: "Acceso no autorizado!",
    });
  } else {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      next();
    } catch (error) {
      return res.status(401).json({
        message: "El token es inválido o ha caducado!",
        error,
      });
    }
  }
};

module.exports = { checkAuth };
