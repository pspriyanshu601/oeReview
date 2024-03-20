import express from "express";
import verifyMiddleware from "../middlewares/verify.js";
import usernameController from "../controllers/user/username.js";
import allDepartmentsController from "../controllers/user/allDepartments.js";
import allSubjectsController from "../controllers/user/allSubjects.js";
import pagedSubjectsController from "../controllers/user/pagedSubjects.js";
import departmentSubjectsController from "../controllers/user/departmentSubjects.js";
import subjectReviewsController from "../controllers/user/subjectReviews.js";

const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  res.status(200).send({
    success: true,
    message: "user is healthy no worry",
  });
});
userRouter.get("/username", verifyMiddleware, usernameController);
userRouter.get("/allDepartments", verifyMiddleware, allDepartmentsController);
userRouter.get("/allSubjects", verifyMiddleware, allSubjectsController);
userRouter.get("/subjects/:page", verifyMiddleware, pagedSubjectsController);
userRouter.get(
  "/allDepartments/:departmentName",
  verifyMiddleware,
  departmentSubjectsController
);
userRouter.get(
  "/allDepartments/:departmentName/:courseCode",
  verifyMiddleware,
  subjectReviewsController
);

export default userRouter;
