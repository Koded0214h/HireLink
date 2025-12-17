import express, { Request, Response } from "express";
import { authenticate } from "../middleware/auth";
import Job from "../models/job";
import Application from "../models/application";
import Bookmark from "../models/bookmark";
import Jobseeker from "../models/jobseeker";
import Employer from "../models/employer";

const router = express.Router();

// Get dashboard stats for employer
router.get("/employer", authenticate, async (req: Request, res: Response) => {
    const { id, role } = req.user;

    if (role !== "employer") {
        return res.status(403).json({
            message: "Forbidden: Only employers can access employer dashboard"
        });
    }

    try {
        const totalJobs = await Job.count({ where: { employer_Id: id } });
        const activeJobs = await Job.count({ 
            where: { employer_Id: id, isACTIVE: "Open" } 
        });
        const totalApplications = await Application.count({
            include: [{
                model: Job,
                as: 'job',
                where: { employer_Id: id }
            }]
        });

        return res.status(200).json({
            message: "Employer dashboard stats retrieved successfully",
            stats: {
                totalJobs,
                activeJobs,
                totalApplications
            }
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error
        });
    }
});

// Get dashboard stats for jobseeker
router.get("/jobseeker", authenticate, async (req: Request, res: Response) => {
    const { id, role } = req.user;

    if (role !== "jobseeker") {
        return res.status(403).json({
            message: "Forbidden: Only jobseekers can access jobseeker dashboard"
        });
    }

    try {
        const jobseeker = await Jobseeker.findOne({ where: { user_Id: id } });
        if (!jobseeker) {
            return res.status(404).json({
                message: "Jobseeker profile not found"
            });
        }

        const totalApplications = await Application.count({
            where: { jobseeker_Id: jobseeker.jobseeker_Id }
        });
        const totalBookmarks = await Bookmark.count({
            where: { jobseeker_Id: jobseeker.jobseeker_Id }
        });

        return res.status(200).json({
            message: "Jobseeker dashboard stats retrieved successfully",
            stats: {
                totalApplications,
                totalBookmarks
            }
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error
        });
    }
});

export default router;