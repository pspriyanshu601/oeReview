import express from "express";
import registerController from "../controllers/auth/register.js";
import loginController from "../controllers/auth/login.js";
import emailVerifyController from "../controllers/auth/verifyEmail.js";
import forgotPasswordController from "../controllers/auth/forgotPassword.js";
import authLimiter from "../middlewares/authLimiter.js";

const authRouter = express.Router();

authRouter.use(authLimiter);
authRouter.post("/register", registerController);
authRouter.post("/login", loginController);
authRouter.post("/verifyEmail", emailVerifyController);
authRouter.post("/forgotPassword", forgotPasswordController);

export default authRouter;
