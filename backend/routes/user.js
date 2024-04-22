import express from "express";
import verifyMiddleware from "../middlewares/verify.js";
import usernameController from "../controllers/user/username.js";
import allDepartmentsController from "../controllers/user/allDepartments.js";
import allSubjectsController from "../controllers/user/allSubjects.js";
import pagedSubjectsController from "../controllers/user/pagedSubjects.js";
import departmentSubjectsController from "../controllers/user/departmentSubjects.js";
import subjectReviewsController from "../controllers/user/subjectReviews.js";
import addReviewController from "../controllers/user/addReview.js";
import pagedSubjectsQueryController from "../controllers/user/pagedSubjectsQuery.js";
import hasAddedSubjectsController from "../controllers/user/hasAddedSubjects.js";
import addUserSubjectsController from "../controllers/user/addUserSubjects.js";
import userSubjectsController from "../controllers/user/userSubjects.js";
import departmentPagedSubjectsController from "../controllers/user/departmentPagedSubjects.js";
import userDataController from "../controllers/user/userData.js";
import deleteUserReviewController from "../controllers/user/deleteUserReview.js";
import upadteUserReviewController from "../controllers/user/updateUserReview.js";
import userLimiter from "../middlewares/userLimiter.js";
import pool from "../database/db.js";

const userRouter = express.Router();

userRouter.use(userLimiter);
userRouter.get("/username", verifyMiddleware, usernameController);
userRouter.get("/allDepartments", allDepartmentsController);
userRouter.get("/allSubjects", allSubjectsController);
userRouter.get(
  "/allVerifiedReviews/courseCode/:courseCode",
  subjectReviewsController
);
userRouter.get("/weightedSubjects/page/:page", pagedSubjectsController);
userRouter.get(
  "/weightedSubjects/filter/:filter/page/:page",
  pagedSubjectsQueryController
);
userRouter.get(
  "/allSubjects/departmentId/:departmentId",
  verifyMiddleware,
  departmentSubjectsController
);
userRouter.get(
  "/allSubjects/departmentId/:departmentId/filter/:filter",
  verifyMiddleware,
  departmentPagedSubjectsController
);
userRouter.get(
  "/hasAddedSubjects",
  verifyMiddleware,
  hasAddedSubjectsController
);
userRouter.get("/userSubjects", verifyMiddleware, userSubjectsController);
userRouter.post("/userSubjects", verifyMiddleware, addUserSubjectsController);
userRouter.post(
  "/submitReview/courseCode/:courseCode",
  verifyMiddleware,
  addReviewController
);

userRouter.get("/userData", verifyMiddleware, userDataController);
userRouter.get("/showAddReviewButton", verifyMiddleware, async (req, res) => {
  const userId = req.body.userId;
  const hasAddedSubjects = await pool.query("SELECT * FROM users WHERE id=$1", [
    userId,
  ]);
  if (hasAddedSubjects.rows[0].no_of_subjects < 6) {
    return res.status(200).json({
      success: true,
      value: true,
    });
  }
  const unReviewedSubjectQuery = `SELECT    
    u.id AS user_id, 
    s.subject_name, 
    s.subject_id,
    s.course_code
    FROM 
    users u
    JOIN 
    LATERAL jsonb_each_text(u.subject_ids) AS s_id ON true
    JOIN 
    subjects s ON s.subject_id = (s_id.value)::int
    LEFT JOIN 
    reviews r ON u.id = r.user_id AND s.subject_id = r.subject_id
    WHERE 
    u.id = $1
    AND r.review_id IS NULL;`;
  const userUnreviewedSubjects = await pool.query(unReviewedSubjectQuery, [
    userId,
  ]);
  if (userUnreviewedSubjects.rows.length > 0) {
    return res.status(200).json({
      success: true,
      value: true,
    });
  }
  return res.status(200).json({
    success: true,
    value: false,
  });
});

userRouter.delete(
  "/deleteReview/reviewId/:reviewId",
  verifyMiddleware,
  deleteUserReviewController
);

userRouter.patch(
  "/updateReview/reviewId/:reviewId",
  verifyMiddleware,
  upadteUserReviewController
);

export default userRouter;
