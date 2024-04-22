import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import adminRouter from "./routes/admin.js";
import userRouter from "./routes/user.js";
import cors from "cors";
import authLimiter from "./middlewares/authLimiter.js";
import userLimiter from "./middlewares/userLimiter.js";

dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());
const port = process.env.PORT;

app.get("/", async (req, res) => {
  res.status(200).send({
    success: true,
    message: "server healthy no worry",
  });
});

app.use("/auth", authLimiter, authRouter);
app.use("/admin", userLimiter, adminRouter);
app.use("/user", userLimiter, userRouter);

app.listen(port);
