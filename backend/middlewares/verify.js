import jwt from "jsonwebtoken";

const verifyMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (!decoded.id) {
        return res.status(400).json({
          success: false,
          message: "Unauthorized User",
        });
      }
      req.body.userId = decoded.id;
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: "Unauthorized User",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};

export default verifyMiddleware;
