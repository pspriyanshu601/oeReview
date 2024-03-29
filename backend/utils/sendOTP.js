import nodemailer from "nodemailer";
import pool from "../database/db.js";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.APP_EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

function generateSixDigitOTP() {
  let otp = "";
  for (let i = 0; i < 6; i++) {
    otp += Math.floor(Math.random() * 10); // Generate a random digit between 0 and 9
  }
  return otp;
}

export default async function sendOTP(email) {
  try {
    const otp = generateSixDigitOTP();

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
