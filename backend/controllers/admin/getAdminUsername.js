import pool from "../../database/db.js";

const getAdminUsernameController=async (req, res) => {
    try {
      const username = await pool.query(
        "SELECT username FROM users WHERE id=$1 ",
        [req.body.userId]
      );
      if(username.rows.length==0){
        return res.status(400).json({
            success:false,
            message:"User doesnt exist"
        });
      }
      return res.status(200).json({
        success: true,
        message: "Name fetched successfully",
        name: username.rows[0].username,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }

export default getAdminUsernameController;