import pool from "../../database/db.js";

const deleteUserReviewController = async (req, res) => {
  try {
    const reviewToBeDeleted = await pool.query(
      "SELECT * FROM reviews WHERE review_id=$1 AND user_id=$2",
      [req.params.reviewId, req.body.userId]
    );
    if (reviewToBeDeleted.rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Review does not exist",
      });
    }
    await pool.query("DELETE FROM reviews WHERE review_id=$1", [
      req.params.reviewId,
    ]);
    const decreaseInfo = reviewToBeDeleted.rows[0];

    if (decreaseInfo.isadminverified == true) {
      const decreaseStarAndComments = `
        UPDATE subjects
        SET
        stars = stars - ${decreaseInfo.stars},
        attendance_stars = attendance_stars - ${decreaseInfo.attendance_stars},
        grades_stars = grades_stars - ${decreaseInfo.grades_stars},
        quality_stars = quality_stars - ${decreaseInfo.quality_stars},
        comments = comments - 1
        WHERE
        subject_id = ${decreaseInfo.subject_id};
        `;
      await pool.query(decreaseStarAndComments);
    }
    return res.status(200).json({
      success: true,
      message: "Review Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default deleteUserReviewController;
