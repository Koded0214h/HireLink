import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize";

class Bookmark extends Model {
    bookmark_Id!: number;
     job_Id!: number;
     jobseeker_Id!: number;
     resume_Id!: number;
     status!: "Applied" | "Under Review" | "Interview Scheduled" | "Offered" | "Rejected";
     applied_at!: Date;
     bookmarked_at!: Date;
}

Bookmark.init(
    {
        // Model attributes are defined 
        bookmark_Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        job_Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'job', // name of Target model
                key: 'job_Id', // key in Target model that we're referencing
            },

        },
        jobseeker_Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'jobseeker', // name of Target model
                key: 'jobseeker_Id', // key in Target model that we're referencing
            },
         
        },

    },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
      modelName: "Bookmark", // We need to choose the model name
      timestamps: true,
      updatedAt: false,
     tableName: "bookmark"
  }
);

export default Bookmark;