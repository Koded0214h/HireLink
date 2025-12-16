import express ,{Request, Response}from "express";
import  Employer from "../models/employer";
import  User  from "../models/user";
import { authenticate } from "../middleware/auth";
import Jobseeker from "../models/jobseeker";

const router = express.Router();

router.post("/profile",authenticate, async (req: Request, res: Response) => {
    const {id,role} = req.user;
    const user_Id = id;

    if (role !== "jobseeker") {
        return res.status(403).json({
            message: "Forbidden: Only jobseeker can create profiles"
        });
    }

      // Check if user_Id exists in Users table
      const user = await User.findByPk(user_Id);
       
      if (!user) {
          return res.status(404).json({
              message: "User not found"
          });
      }
    
      const {phone,profile_summary} = req.body;

    try {
       const full_name = user.firstName + " " + user.lastName;
 // Create Jobseeker profile
const newJobseeker = await  Jobseeker.create({
            user_Id,
            full_name,
            phone,
            profile_summary
        });

        return res.status(201).json({
            message: "Employer profile created successfully",
            employer: newJobseeker
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error
        });
    }
});





export default router;