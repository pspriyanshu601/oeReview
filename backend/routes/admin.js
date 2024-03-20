import express from "express";
import addSubject from "../controllers/admin/addSubject.js";
import verifyReview from "../controllers/admin/verifyReview.js";
import unverifiedReviews from "../controllers/admin/unverifiedReviews.js";

const adminRouter = express.Router();

adminRouter.post("/addSubject", addSubject);
adminRouter.post("/verifyReview", verifyReview);
adminRouter.get("/unverifiedReviews/:page", unverifiedReviews);

export default adminRouter;
