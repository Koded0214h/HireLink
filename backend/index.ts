
import express, {NextFunction, Request,Response} from "express";
import sequelize from "./config/sequelize";


import authRouter from "./route/auth";
import employerRouter from "./route/employer";
import jobseekerRouter from "./route/jobseeker";
import jobRouter from "./route/job";
import applicationRouter from "./route/application";




const app = express();
const PORT = 3000;
app.use(express.json());




app.use("/auth", authRouter);
app.use("/api/employer", employerRouter);
app.use("/api/jobseeker",jobseekerRouter);
app.use("/api/jobs",jobRouter);
app.use("/api/application",applicationRouter);
app.listen(PORT, async() => {
  await sequelize.authenticate();
  console.log(`Server running on http://localhost:${PORT}`);
});


