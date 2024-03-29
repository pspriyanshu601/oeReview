import pool from "../../database/db.js";
import bcrypt from "bcrypt";
import validateForgotPasswordBody from "../../validators/forgotPassword.js";
import sendOTP from "../../utils/sendOTP.js";
import jwt from "jsonwebtoken";

const saltRounds = 10;

const forgotPasswordController = async (req, res) => {
  try {
    const errorMessage = validateForgotPasswordBody(req.body);
    if (errorMessage.length > 0) {
      return res.status(400).send({
        success: false,
        message: errorMessage[0],
      });
    }
    var { email, newPassword } = req.body;
    email = email.toLowerCase();
    //cheking if user does not exist in the database
    var user = await pool.query("SELECT * FROM users WHERE email=$1", [email]);
    if (user.rows.length == 0) {
      return res.status(400).json({
        success: false,
        message: "Please Register First",
        path: "register",
      });
    }
    const email_token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    await sendOTP(email);
    //updating the password
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
    await pool.query("UPDATE users SET newpassword=$1 WHERE email=$2", [
      hashedPassword,
      email,
    ]);

    return res.status(200).json({
      success: true,
      message: "OTP Sent Via Email",
      path: "verifyEmail",
      token: email_token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default forgotPasswordController;
