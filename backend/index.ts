import express, { NextFunction, Request, Response } from "express";
import sequelize from "./config/sequelize";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
// console.log("JWT_SECRET from index.ts:", process.env.JWT_SECRET);
console.log("=== Server Startup ===");
console.log("JWT_SECRET loaded:", !!process.env.JWT_SECRET);
console.log("JWT_SECRET length:", process.env.JWT_SECRET?.length || 0);
console.log("Current directory:", __dirname);
console.log("=====================");

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in the .env file");
}

import authRouter from "./route/auth";
import employerRouter from "./route/employer";
import jobseekerRouter from "./route/jobseeker";
import jobRouter from "./route/job";
import applicationRouter from "./route/application";
import bookmarkRouter from "./route/bookmark";
import dashboardRouter from "./route/dashboard";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/api/employer", employerRouter);
app.use("/api/jobseeker", jobseekerRouter);
app.use("/api/jobs", jobRouter);
app.use("/api/application", applicationRouter);
app.use("/api/bookmarks", bookmarkRouter);
app.use("/api/dashboard", dashboardRouter);
app.listen(PORT, async () => {
  await sequelize.authenticate();
  console.log(`Server running on http://localhost:${PORT}`);
});
