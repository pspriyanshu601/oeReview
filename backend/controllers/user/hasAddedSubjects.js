import pool from "../../database/db.js";

const hasAddedSubjectsController = async (req, res) => {
  try {
    const userId=req.body.userId;
    const hasAddedSubjects=await pool.query("")

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server error",
    });
  }
};

export default hasAddedSubjectsController;
