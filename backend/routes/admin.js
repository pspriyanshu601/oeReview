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
