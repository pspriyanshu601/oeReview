import pool from "../../database/db.js";

const hasAddedSubjectsController = async (req, res) => {
  try {
    const userId = req.body.userId;
    const hasAddedSubjects = await pool.query(
      "SELECT * FROM users WHERE id=$1",
      [userId]
    );
    console.log(hasAddedSubjects.rows[0].no_of_subjects);
    if (hasAddedSubjects.rows[0].no_of_subjects === 0) {
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
