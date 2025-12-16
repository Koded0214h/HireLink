import express ,{Request, Response}from "express";
import  User  from "../models/user";
import { authenticate } from "../middleware/auth";
import Job from "../models/job";


const router = express.Router();

router.get("/:Jobid",authenticate, async (req: Request, res: Response) => {

});





export default router;


