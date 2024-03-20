import pool from "../../database/db.js";

const usernameController = async (req, res) => {
  try {
    const username = await pool.query(
      "SELECT username FROM users WHERE id=$1",
      [req.body.userId]
    );
    return res.status(200).json({
      success: true,
      message: "Name fetched successfully",
      name: username.rows[0].username,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
};

export default usernameController;