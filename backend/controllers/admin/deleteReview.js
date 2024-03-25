import pool from "../../database/db.js";

const deleteReviewController = async (req, res) => {
  try {
    const { reviewId } = req.params;

    const reviewToBeVerified = await pool.query(
      "SELECT * FROM reviews WHERE review_id=$1",
      [reviewId]
    );

    if (reviewToBeVerified.rows.length == 0) {
      return res.status(400).json({
        success: false,
        message: "Review Does not exist",
      });
    }
    await pool.query("DELETE FROM reviews WHERE review_id = $1", [reviewId]);

    if (reviewToBeVerified.rows[0].isadminverified == false) {
      return res.status(200).json({
        success: true,
        message: "Review Deleted Successfully",
      });
    }

    const decreaseInfo = reviewToBeVerified.rows[0];
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

    return res.status(200).json({
      success: true,
      message: "Review Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default deleteReviewController;
