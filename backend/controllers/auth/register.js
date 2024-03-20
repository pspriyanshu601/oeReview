import pool from "../../database/db.js";
import bcrypt from "bcrypt";
import validateRegisterBody from "../../validators/register.js";
import sendOTP from "../../utils/sendOTP.js";

const saltRounds = 10;

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


    //check if user is registered but not verified
    const unVerifiedUser = await pool.query(
      "SELECT * FROM users WHERE email=$1",
      [email]
    );

    if (unVerifiedUser.rows.length > 0) {
    
     sendOTP(email);

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
      "INSERT INTO users (username,email, password, verified,newPassword) VALUES ($1, $2, $3, $4,$5)",
      [username, email, hashedPassword, false, hashedPassword]
    );

    sendOTP(email);

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
