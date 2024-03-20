import nodemailer from "nodemailer";
import otpGenerator from "otp-generator";
import pool from "../database/db.js";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.APP_EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

export default async function sendOTP(email) {
  try {
    // Generate OTP
    const otp = otpGenerator.generate(6, {
      digits: true,
      alphabets: false,
      upperCase: false,
      specialChars: false,
    });

    const mailOptions = {
      from: "maileroereview@gmail.com",
      to: email,
      subject: "Email Verification OTP",
      text: `Your OTP for email verification is: ${otp}`,
    };

    await transporter.sendMail(mailOptions);

    await pool.query("UPDATE users SET otp=$1 WHERE email = $2", [otp, email]);
  } catch (error) {
    console.log(error);
  }
}
