import express from "express";
import verifyMiddleware from "../middlewares/verify.js";
import usernameController from "../controllers/user/username.js";
import allDepartmentsController from "../controllers/user/allDepartments.js";
import allSubjectsController from "../controllers/user/allSubjects.js";
import pagedSubjectsController from "../controllers/user/pagedSubjects.js";

const userRouter = express.Router();

userRouter.get("/username", verifyMiddleware,usernameController);
userRouter.get("/allDepartments",verifyMiddleware,allDepartmentsController);
userRouter.get("/allSubjects",verifyMiddleware,allSubjectsController);
userRouter.get("/subjects/:page", verifyMiddleware,pagedSubjectsController);

export default userRouter;