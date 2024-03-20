import express from 'express';
import dotenv from "dotenv";
import nodemailer from "nodemailer"
import pool from "./database/db.js"

dotenv.config();
const app = express();
const port=process.env.PORT;

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.APP_EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

app.get("/",async (req,res)=>{

    const departmentQuery='SELECT * FROM departments'
    const departments=await pool.query(departmentQuery);
    console.log(departments.rows);

    const email="21je0715@iitism.ac.in"
    const mailOptions = {
        from: process.env.APP_EMAIL,
        to: email,
        subject: "Email Verification OTP",
        text: `This text is only for testing`,
      };

    await transporter.sendMail(mailOptions);

    res.status(200).send({
        success : true,
        message : "server healthy",
        departments:departments.rows
    })
});



app.listen(port);