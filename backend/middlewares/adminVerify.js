import jwt from "jsonwebtoken";
import pool from "../database/db.js";

const adminVerifyMiddleware = async (req, res, next) => {
  try {
    var data;
    const token = req.headers.authorization;
    try {
      data = jwt.verify(token, process.env.JWT_SECRET);
      if (!data.id) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized User",
        });
      }
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized User",
      });
    }
    const user = await pool.query(
      "SELECT * FROM users WHERE id=$1 and isadmin=$2",
      [data.id, true]
    );
    if (user.rows.length == 0) {
      return res.status(401).json({
        success: false,
        message: "You are not an admin",
      });
    }
    req.body.userId = data.id;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};

export default adminVerifyMiddleware;
