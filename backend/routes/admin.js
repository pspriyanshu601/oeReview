import express from "express";
import addSubject from "../controllers/admin/addSubject.js";
import verifyReview from "../controllers/admin/verifyReview.js";
import unverifiedReviews from "../controllers/admin/unverifiedReviews.js";
import adminVerifyMiddleware from "../middlewares/adminVerify.js";
import deleteAllUserSubjectController from "../controllers/admin/deleteAllUserSubjects.js";

const adminRouter = express.Router();

adminRouter.post("/addSubject",adminVerifyMiddleware, addSubject);
adminRouter.post("/verifyReview", adminVerifyMiddleware,verifyReview);
adminRouter.get("/unverifiedReviews/:page", adminVerifyMiddleware,unverifiedReviews);
adminRouter.delete("/deleteAllUsersSubjects",adminVerifyMiddleware,deleteAllUserSubjectController);

export default adminRouter;
