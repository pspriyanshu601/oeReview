import jwt from "jsonwebtoken";
import pool from "../../database/db.js";
import validateVerifyEmailBody from "../../validators/verifyEmail.js";

const verifyEmailController = async (req, res) => {
  try {
    if (!validateVerifyEmailBody(req.body)) {
      return res.status(400).send({
        success: false,
        message: "Invalid Input",
      });
    }
    const { email, otp } = req.body;

    //check if user exist or not
    const user = await pool.query("SELECT * FROM users WHERE email=$1", [
      email,
    ]);
    if (user.rows.length == 0) {
      return res.status(403).json({
        success: false,
        message: "You are not registered please goto register",
        path: "register",
      });
    }

    // Check if OTP is valid
    const result = await pool.query(
      "SELECT * FROM users WHERE email = $1 AND otp = $2",
      [email, otp]
    );

    if (result.rows.length == 0) {
      return res.status(400).send({
        success: false,
        message: "Invalid OTP",
      });
    }
    // Mark user as verified
    const updateQuery = `
      UPDATE users
      SET verified = $1,
      password = (SELECT newpassword FROM users WHERE email = $2)
      WHERE email = $2;`;
    await pool.query(updateQuery, [true, email]);
    return res.status(200).json({
      message: "Email verified successfully",
      success: true,
      path: "home",
    });
  } catch (error) {
    console.error("Error verifying email:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default verifyEmailController;
