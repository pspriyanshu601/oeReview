import pool from "../../database/db.js";
import z from "zod";

const verifyReview = async (req, res) => {
  try {
    const reviewIdSchema = z.number();
    const verifiedSchema = z.boolean();

    try {
      reviewIdSchema.parse(req.body.reviewId);
      verifiedSchema.parse(req.body.verified);
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: "Invalid Data",
      });
    }
    const { reviewId, verified } = req.body;
    const reviewToBeVerified = await pool.query(
      "SELECT * FROM reviews WHERE review_id=$1",
      [reviewId]
    );
    if (verified) {
      await pool.query(
        "UPDATE reviews SET isadminverified = true WHERE review_id = $1",
        [reviewId]
      );
      const increaseInfo = reviewToBeVerified.rows[0];
      const increaseStarAndComments = `
      UPDATE subjects
      SET 
      stars = stars + ${increaseInfo.stars},
      attendance_stars = attendance_stars + ${increaseInfo.attendance_stars},
      grades_stars = grades_stars + ${increaseInfo.grades_stars},
      quality_stars = quality_stars + ${increaseInfo.quality_stars},
      comments = comments + 1
      WHERE 
      subject_id = ${increaseInfo.subject_id};
      `;
      await pool.query(increaseStarAndComments);
      return res.status(200).json({
        success: true,
        message: "Review Verified Successfully",
      });
    } else {
      await pool.query("DELETE FROM reviews WHERE review_id = $1", [reviewId]);

      return res.status(200).json({
        success: true,
        message: "Review Deleted Successfully",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default verifyReview;
