import sequelize from "../config/sequelize";
import User from "./user";
import Employer from "./employer";
import Bookmark from "./bookmark";
import Application from "./application";
import Job from "./job";
import Jobseeker from "./jobseeker";
import Resume from "./resume";

// Import other models here
// import Post from './Post';

const models = {
  User,
  Employer,
  Bookmark,
  Application,
  Job,
  Jobseeker,
  Resume,
   
};



export { sequelize };
export default models;
