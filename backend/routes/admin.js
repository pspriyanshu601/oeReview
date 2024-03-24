import express from "express";
import addSubject from "../controllers/admin/addSubject.js";
import verifyReview from "../controllers/admin/verifyReview.js";
import unverifiedReviews from "../controllers/admin/unverifiedReviews.js";
import adminVerifyMiddleware from "../middlewares/adminVerify.js";
import deleteAllUserSubjectController from "../controllers/admin/deleteAllUserSubjects.js";
import pool from "../database/db.js";

const adminRouter = express.Router();

adminRouter.post("/addSubject", adminVerifyMiddleware, addSubject);
adminRouter.post("/verifyReview", adminVerifyMiddleware, verifyReview);
adminRouter.get(
  "/unverifiedReviews/:page",
  adminVerifyMiddleware,
  unverifiedReviews
);
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
