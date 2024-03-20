import pool from "../../database/db.js";

const allDepartmentsController = async (req, res) => {
  try {
    const departments = await pool.query("SELECT * FROM departments");
    return res.status(200).json({
      success: true,
      message: "Fetched departments successfully",
      departments: departments.rows,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default allDepartmentsController;