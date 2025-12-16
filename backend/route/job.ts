import express ,{Request, Response}from "express";
import  User  from "../models/user";
import { authenticate } from "../middleware/auth";
import Job from "../models/job";


const router = express.Router();

router.post("/",authenticate, async (req: Request, res: Response) => {
    const {id,role} = req.user;
    const employer_Id = id;

    if (role !== "employer") {
        return res.status(403).json({
            message: "Forbidden: Only employers can create Jobs"
        });
    }

      // Check if user_Id exists in Users table
      const user = await User.findByPk(employer_Id);
       
      if (!user) {
          return res.status(404).json({
              message: "User not found"
          });
      }
    
      const {title,description,job_type,salary_min,salary_max,location,status} = req.body;

    try {
     
 // Create Jobseeker profile
const newJob = await  Job.create({
            employer_Id,
            title,
            description,
            job_type,
            salary_min,
            salary_max,
            location,
            status
});

        return res.status(201).json({
            message: "Job created successfully",
            Job: newJob
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error
        });
    }
});





export default router;