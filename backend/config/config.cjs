// const dotenv = require("dotenv");
// dotenv.config();

// module.exports = {
//   "development": {
//     "username": process.env.DATABASE_USER,
//     "password": process.env.DATABASE_PASSWORD,
//     "database": process.env.DATABASE_NAME,
//     "host": process.env.DATABASE_HOST,
//     "dialect": "postgres",
//     "port": process.env.DATABASE_PORT || 5432
//   },
//   "test": {
//     "username": process.env.DATABASE_USER,
//     "password": process.env.DATABASE_PASSWORD,
//     "database": process.env.DATABASE_NAME_TEST,
//     "host": process.env.DATABASE_HOST,
//     "dialect": "postgres"
//   },
//   "production": {
//     "username": process.env.DATABASE_USER,
//     "password": process.env.DATABASE_PASSWORD,
//     "database": process.env.DATABASE_NAME,
//     "host": process.env.DATABASE_HOST,
//     "dialect": "postgres",
//     "dialectOptions": {
//       "ssl": {
//         "require": true,
//         "rejectUnauthorized": false
//       }
//     }
//   }
// }

const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: "postgres",
    port: process.env.DATABASE_PORT || 5432,
  },
  test: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME_TEST,
    host: process.env.DATABASE_HOST,
    dialect: "postgres",
  },
  production: {
    use_env_variable:
      "psql 'postgresql://neondb_owner:npg_gkwpVc1hq4za@ep-divine-wave-a4z9ljuk-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
