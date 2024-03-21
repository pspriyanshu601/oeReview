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

const userRouter = express.Router();

userRouter.get("/username", verifyMiddleware,usernameController);
userRouter.get("/allDepartments",verifyMiddleware,allDepartmentsController);
userRouter.get("/allSubjects",verifyMiddleware,allSubjectsController);
userRouter.get("/allVerifiedReviews/:courseCode",verifyMiddleware,subjectReviewsController);
userRouter.get("/weightedSubjects/:page", verifyMiddleware,pagedSubjectsController);
userRouter.get("/weightedSubjects/:filter/:page",verifyMiddleware,pagedSubjectsQueryController)
// todo 
userRouter.get("/allSubjects/:departmentId",verifyMiddleware,departmentSubjectsController);
userRouter.post("/submitReview/:courseCode",verifyMiddleware,addReviewController);
userRouter.get("/hasAddedSubjects",verifyMiddleware);

export default userRouter;