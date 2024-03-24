import pool from "../../database/db.js";

const unverifiedReviews = async (req, res) => {
  try {
    const reviews = await pool.query(
      "SELECT reviews.*, users.username, subjects.subject_name, subjects.course_code FROM reviews INNER JOIN users ON reviews.user_id = users.id INNER JOIN subjects ON reviews.subject_id = subjects.subject_id WHERE reviews.isadminverified = false ORDER BY reviews.review_id DESC"
    );

    return res.status(200).json({
      success: true,
      reviews: reviews.rows,
      message: "Reviews fetched successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default unverifiedReviews;
