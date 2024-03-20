import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import adminRouter from "./routes/admin.js";

dotenv.config();
const app = express();

app.use(express.json());
const port = process.env.PORT;

app.get("/", async (req, res) => {
  res.status(200).send({
    success: true,
    message: "server healthy",
  });
});

app.use("/auth", authRouter);
app.use("/admin", adminRouter);

app.listen(port);
