import pool from "../../database/db.js";

const allSubjectsController = async (req, res) => {
  try {
    const departments = await pool.query("SELECT * FROM subjects");
    return res.status(200).json({
      success: true,
      message: "Fetched all subjects successfully",
      departments: departments.rows,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server error",
    });
  }
};

export default allSubjectsController;