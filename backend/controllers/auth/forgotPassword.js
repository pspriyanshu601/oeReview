import pool from "../../database/db.js";
import bcrypt from "bcrypt";
import validateForgotPasswordBody from "../../validators/forgotPassword.js";
import sendOTP from "../../utils/sendOTP.js";

const saltRounds = 10;

const forgotPasswordController = async (req, res) => {
  try {
    if (!validateForgotPasswordBody(req.body)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Data",
      });
    }
    var { email, newPassword } = req.body;
    email=email.toLowerCase();
    //cheking if user does not exist in the database
    var user = await pool.query("SELECT * FROM users WHERE email=$1", [
      email,
    ]);
    if (user.rows.length == 0) {
      return res.status(200).json({
        success: false,
        message: "Please Register First",
        path: "register",
      });
    }

    await sendOTP(email);
    //updating the password
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
    await pool.query("UPDATE users SET newpassword=$1 WHERE email=$2", [
      hashedPassword,
      email,
    ]);

    return res.json({
      success: true,
      message: "OTP Sent Via Email",
      path: "verifyEmail",
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
