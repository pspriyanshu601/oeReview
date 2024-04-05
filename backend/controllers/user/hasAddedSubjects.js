import pool from "../../database/db.js";

const hasAddedSubjectsController = async (req, res) => {
  try {
    const userId = req.body.userId;
    const hasAddedSubjects = await pool.query(
      "SELECT * FROM users WHERE id=$1",
      [userId]
    );
    if (hasAddedSubjects.rows[0].no_of_subjects <6) {
      return res.status(200).json({
        success: true,
        hasAddedSubjects: false,
      });
    }
    return res.status(200).json({
      success: true,
      hasAddedSubjects: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server error",
    });
  }
};

export default hasAddedSubjectsController;
