import pool from "../../database/db.js";
import validateUpdateBody from "../../validators/updateBodyValidation.js";

const upadteUserReviewController = async (req, res) => {
  try {
    const errorMessage = validateUpdateBody(req.body);
    if (errorMessage.length > 0) {
      return res.status(400).send({
        success: false,
        message: errorMessage[0],
      });
    }
    const { reviewId } = req.params;
    const {
      details,
      stars,
      attendance_stars,
      grades_stars,
      quality_stars,
      userId,
    } = req.body;

    //first delete old review
    const reviewToBeDeleted = await pool.query(
      "SELECT * FROM reviews WHERE review_id=$1 AND user_id=$2",
      [reviewId, userId]
    );
    if (reviewToBeDeleted.rows.length == 0) {
      return res.status(400).json({
        success: false,
        message: "Review does not exist",
      });
    }
    await pool.query("DELETE FROM reviews WHERE review_id=$1", [reviewId]);
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

    //now add new review
    const addReview = `INSERT INTO reviews (details, stars, subject_id, user_id, attendance_stars, grades_stars, quality_stars)
    VALUES ($1, $2, $3, $4, $5, $6, $7);
    `;
    await pool.query(addReview, [
      details,
      stars,
      decreaseInfo.subject_id,
      userId,
      attendance_stars,
      grades_stars,
      quality_stars,
    ]);
    return res.status(200).json({
      success: true,
      message: "The review will be updated after admin verification",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default upadteUserReviewController;
