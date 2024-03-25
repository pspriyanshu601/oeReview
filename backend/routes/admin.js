import express from "express";
import addSubject from "../controllers/admin/addSubject.js";
import verifyReview from "../controllers/admin/verifyReview.js";
import unverifiedReviews from "../controllers/admin/unverifiedReviews.js";
import adminVerifyMiddleware from "../middlewares/adminVerify.js";
import deleteAllUserSubjectController from "../controllers/admin/deleteAllUserSubjects.js";
import resetReview from "../controllers/admin/resetReview.js";
import getAllReviewsController from "../controllers/admin/getAllReviews.js";
import clearAllSubjectReviewsController from "../controllers/admin/clearAllSubjectReviews.js";
import getAdminUsernameController from "../controllers/admin/getAdminUsername.js";
import deleteReviewController from "../controllers/admin/deleteReview.js";

const adminRouter = express.Router();

adminRouter.post("/addSubject", adminVerifyMiddleware, addSubject);
adminRouter.post("/verifyReview", adminVerifyMiddleware, verifyReview);
adminRouter.get("/unverifiedReviews", adminVerifyMiddleware, unverifiedReviews);
adminRouter.get("/allReviews", adminVerifyMiddleware, getAllReviewsController);
adminRouter.patch("/resetReview", adminVerifyMiddleware, resetReview);
adminRouter.delete(
  "/deleteAllUsersSubjects",
  adminVerifyMiddleware,
  deleteAllUserSubjectController
);
adminRouter.post(
  "/clearSubjects",
  adminVerifyMiddleware,
  clearAllSubjectReviewsController
);
adminRouter.delete(
  "/deleteReview/:reviewId",
  adminVerifyMiddleware,
  deleteReviewController
);
adminRouter.get("/username", adminVerifyMiddleware, getAdminUsernameController);

export default adminRouter;
