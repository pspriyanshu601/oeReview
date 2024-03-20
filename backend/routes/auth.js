import express from "express";
import registerController from "../controllers/auth/register.js";

const authRouter=express.Router();

authRouter.post("/register",registerController);

export default authRouter
