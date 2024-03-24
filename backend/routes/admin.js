import express from "express";
import addSubject from "../controllers/admin/addSubject.js";
import verifyReview from "../controllers/admin/verifyReview.js";
import unverifiedReviews from "../controllers/admin/unverifiedReviews.js";
import adminVerifyMiddleware from "../middlewares/adminVerify.js";
import deleteAllUserSubjectController from "../controllers/admin/deleteAllUserSubjects.js";
import pool from "../database/db.js";
import resetReview from "../controllers/admin/resetReview.js";

const adminRouter = express.Router();

adminRouter.post("/addSubject", adminVerifyMiddleware, addSubject);
adminRouter.post("/verifyReview", adminVerifyMiddleware, verifyReview);
adminRouter.get("/unverifiedReviews", adminVerifyMiddleware, unverifiedReviews);
adminRouter.get("/allReviews", adminVerifyMiddleware, async (req, res) => {
  try {
    const reviews = await pool.query(
      "SELECT reviews.*, users.username, subjects.subject_name, subjects.course_code FROM reviews INNER JOIN users ON reviews.user_id = users.id INNER JOIN subjects ON reviews.subject_id = subjects.subject_id ORDER BY reviews.review_id DESC"
    );
    return res.status(200).json({
      success: true,
      message: "Reviews fetched successfully",
      reviews: reviews.rows,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});
adminRouter.patch("/resetReview", adminVerifyMiddleware, resetReview);
adminRouter.delete(
  "/deleteAllUsersSubjects",
  adminVerifyMiddleware,
  deleteAllUserSubjectController
);
adminRouter.post("/clearSubjects", adminVerifyMiddleware, async (req, res) => {
  try {
    await pool.query(
      "UPDATE subjects SET stars = 0, attendance_stars = 0, grades_stars = 0, quality_stars = 0, comments = 0"
    );
    return res.status(200).json({
      success: true,
      message: "Subjects Cleared Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

adminRouter.post("/ok", adminVerifyMiddleware, async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "OK",
  });
});

adminRouter.delete(
  "/deleteReview/:reviewId",
  adminVerifyMiddleware,
  async (req, res) => {
    try {
      const { reviewId } = req.params;
      await pool.query("DELETE FROM reviews WHERE review_id = $1", [reviewId]);
      const reviewToBeVerified = await pool.query(
        "SELECT * FROM reviews WHERE review_id=$1",
        [reviewId]
      );

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
  }
);
adminRouter.get("/username", adminVerifyMiddleware, async (req, res) => {
  try {
    const username = await pool.query(
      "SELECT username FROM users WHERE id=$1",
      [req.body.userId]
    );
    return res.status(200).json({
      success: true,
      message: "Name fetched successfully",
      name: username.rows[0].username,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

export default adminRouter;
