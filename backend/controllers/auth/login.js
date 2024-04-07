import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "../../database/db.js";
import validateLoginBody from "../../validators/login.js";
import sendOTP from "../../utils/sendOTP.js";

const loginController = async (req, res) => {
  try {
    //checking correctness of email
    const errorMessage = validateLoginBody(req.body);
    if (errorMessage.length > 0) {
      return res.status(400).send({
        success: false,
        message: errorMessage[0],
      });
    }
    var { email, password } = req.body;
    email = email.toLowerCase();

    //cheking if user does not exist in the database
    const user = await pool.query("SELECT * FROM users WHERE email=$1", [
      email,
    ]);
    if (user.rows.length == 0) {
      return res.status(400).json({
        success: false,
        message: "No User Found",
        path: "register",
      });
    }

    //check if user is admin or not
    const admin = await pool.query(
      "SELECT * FROM users WHERE isadmin=true and email=$1",
      [email]
    );
    if (admin.rows.length > 0) {
      const savedPassword = admin.rows[0].password;

      //checking if the password matches with hash saved
      const checkpassword = await bcrypt.compare(password, savedPassword);

      if (!checkpassword) {
        return res.status(401).json({
          success: false,
          message: "Invalid Credentials",
        });
      }
      //generating authentication token
      const token = jwt.sign({ id: admin.rows[0].id }, process.env.JWT_SECRET, {
        expiresIn: "15d",
      });

      return res.status(201).json({
        success: true,
        isadmin: true,
        message: "Logged in successfully",
        token,
        username:user.rows[0].username,
        path: "home",
      });
    }

    //check if user exists and is not verified
    const findUser = await pool.query(
      "SELECT * FROM users WHERE email=$1 and verified=$2",
      [email, false]
    );

    const email_token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    if (findUser.rows.length > 0) {
      await sendOTP(email);

      return res.status(200).json({
        success: true,
        message: "OTP sent via Email",
        path: "verifyEmail",
        token: email_token,
      });
    }

    //user exists and verified

    //taking hashed password from database
    const userData = await pool.query(
      "SELECT * FROM users WHERE email=$1 and verified=$2",
      [email, true]
    );
    const savedPassword = userData.rows[0].password;

    //checking if the password matches with hash saved
    const checkpassword = await bcrypt.compare(password, savedPassword);

    if (!checkpassword) {
      return res.status(401).json({
        success: false,
        message: "invalid credentials",
      });
    }
    //generating authentication token
    const token = jwt.sign(
      { id: userData.rows[0].id },
      process.env.JWT_SECRET,
      {
        expiresIn: "15d",
      }
    );

    return res.status(201).json({
      success: true,
      isadmin: false,
      message: "Logged in successfully",
      token,
      path: "home",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default loginController;
