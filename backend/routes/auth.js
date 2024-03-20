import express from "express";
import registerController from "../controllers/auth/register.js";
import loginController from "../controllers/auth/login.js";

const authRouter=express.Router();

authRouter.post("/register",registerController);
authRouter.post("/login",loginController);

export default authRouter
