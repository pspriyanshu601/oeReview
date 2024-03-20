import pool from "../../database/db.js";
import nodemailer from "nodemailer";
import otpGenerator from "otp-generator";
import bcrypt from "bcrypt";
import validateRegisterBody from "../../validators/register.js";

const saltRounds = 10;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.APP_EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});
function extractDomain(email) {
  const parts = email.split("@");
  return parts[1];
}

const registerController = async (req, res) => {
  try {
    //checking correct input
    if (!validateRegisterBody(req.body))
      return res.status(400).send({
        success: false,
        message: "Invalid Data",
      });

    const { email, password, username } = req.body;

    //check if institue id is used or not
    const domain = extractDomain(email);
    if (domain != "iitism.ac.in") {
      return res.status(200).json({
        success: false,
        message: "Please register with institute email ID",
      });
    }

    //check if user is already registered and verified
    const alreadyRegistered = await pool.query(
      "SELECT * FROM users WHERE email=$1 and verified=$2",
      [email, true]
    );

    if (alreadyRegistered.rows.length > 0) {
      return res.status(200).json({
        success: false,
        message: "User already registered please go to login",
        path:"login"
      });
    }

    // Generate OTP
    const otp = otpGenerator.generate(6, {
      digits: true,
      alphabets: false,
      upperCase: false,
      specialChars: false,
    });

    //check if user is registered but not verified
    const unVerifiedUser = await pool.query(
      "SELECT * FROM users WHERE email=$1",
      [email]
    );

    if (unVerifiedUser.rows.length > 0) {
    
      const mailOptions = {
        from: "maileroereview@gmail.com",
        to: email,
        subject: "Email Verification OTP",
        text: `Your OTP for email verification is: ${otp}`,
      };

      await pool.query("UPDATE users SET otp=$1 WHERE email = $2", [
        otp,
        email,
      ]);

      await transporter.sendMail(mailOptions);

      return res.json({
        success: false,
        message:
          "Your account is not verified please check the otp sent at mail",
        path:"verifyEmail"
      });
    }

    //case when new user
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    await pool.query(
      "INSERT INTO users (username,email, password, otp, verified,new_password) VALUES ($1, $2, $3, $4,$5,$6)",
      [username, email, hashedPassword, otp, false, hashedPassword]
    );

    // Send email with OTP
    const mailOptions = {
      from: "maileroereview@gmail.com",
      to: email,
      subject: "Email Verification OTP",
      text: `Your OTP for email verification is: ${otp}`,
    };

    await transporter.sendMail(mailOptions);
    return res.json({
      success: true,
      message: "Email sent for verification",
      path:"verifyEmail"
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
