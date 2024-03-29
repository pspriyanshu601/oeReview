import jwt from "jsonwebtoken";
import pool from "../../database/db.js";
import validateVerifyEmailBody from "../../validators/verifyEmail.js";

const verifyEmailController = async (req, res) => {
  try {
    const errorMessage = validateVerifyEmailBody(req.body);
    if (errorMessage.length > 0) {
      return res.status(400).send({
        success: false,
        message: errorMessage[0],
      });
    }

    const email_token = req.headers.authorization;
    if (!email_token)
      return res
        .status(400)
        .json({ success: false, message: "Email Doesnt Exist" });

    var email;

    try {
      const decoded = jwt.verify(email_token, process.env.JWT_SECRET);
      if (!decoded.email) {
        return res.status(400).json({
          success: false,
          message: "Unauthorized User",
        });
      }
      email = decoded.email;
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: "Unauthorized User",
      });
    }

    var { otp } = req.body;
    email = email.toLowerCase();

    //check if user exist or not
    const user = await pool.query("SELECT * FROM users WHERE email=$1", [
      email,
    ]);
    if (user.rows.length == 0) {
      return res.status(403).json({
        success: false,
        message: "Please Register First",
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
    const userData = await pool.query("SELECT * FROM users WHERE email=$1", [
      email,
    ]);

    const token = jwt.sign(
      { id: userData.rows[0].id },
      process.env.JWT_SECRET,
      {
        expiresIn: "15d",
      }
    );
    return res.status(200).json({
      message: "Email verified successfully",
      success: true,
      path: "home",
      token,
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
