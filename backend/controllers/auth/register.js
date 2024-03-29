import pool from "../../database/db.js";
import bcrypt from "bcrypt";
import validateRegisterBody from "../../validators/register.js";
import sendOTP from "../../utils/sendOTP.js";
import jwt from "jsonwebtoken";

const saltRounds = 10;

function extractDomain(email) {
  const parts = email.split("@");
  return parts[1];
}

const registerController = async (req, res) => {
  try {
    //checking correct input
    const errorMessage = validateRegisterBody(req.body);
    if (errorMessage.length > 0) {
      return res.status(400).send({
        success: false,
        message: errorMessage[0],
      });
    }
    var { email, password, username } = req.body;
    email = email.toLowerCase();

    //check if institue id is used or not
    const domain = extractDomain(email);
    if (domain != "iitism.ac.in") {
      return res.status(400).json({
        success: false,
        message: "Please Use Institute Email Id",
      });
    }

    //check if user is already registered and verified
    const alreadyRegistered = await pool.query(
      "SELECT * FROM users WHERE email=$1 and verified=$2",
      [email, true]
    );

    if (alreadyRegistered.rows.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Already Registered",
        path: "login",
      });
    }

    //check if user is registered but not verified
    const unVerifiedUser = await pool.query(
      "SELECT * FROM users WHERE email=$1",
      [email]
    );

    const email_token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    if (unVerifiedUser.rows.length > 0) {
      await sendOTP(email);
      return res.status(200).json({
        success: false,
        message: "OTP Sent Via Email",
        path: "verifyEmail",
        token: email_token,
      });
    }

    //case when new user
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    await pool.query(
      "INSERT INTO users (username,email, password, verified,newPassword) VALUES ($1, $2, $3, $4,$5)",
      [username, email, hashedPassword, false, hashedPassword]
    );

    await sendOTP(email);

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

export default registerController;
