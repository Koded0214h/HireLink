# HireLink

HireLink is a full-stack web application that connects job seekers with employers. Job seekers can browse and apply for jobs, while employers can post new job openings and manage their applications.

## Features

### Job Seekers
- Browse and search for jobs
- View job details
- Apply for jobs
- Track application status
- Bookmark jobs

### Employers
- Post new jobs
- View and manage job postings
- View applications for each job

## Technologies Used

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- React Router

### Backend
- Node.js
- Express
- TypeScript
- Sequelize
- PostgreSQL

## Getting Started

### Prerequisites
- Node.js
- PostgreSQL

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Koded0214h/HireLink.git
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

### Database Setup

1. **Create a PostgreSQL database.**
2. **Create a `.env` file in the `backend` directory** and add the following environment variables:
   ```
   DB_USERNAME=<your_database_username>
   DB_PASSWORD=<your_database_password>
   DB_NAME=<your_database_name>
   DB_HOST=localhost
   DB_PORT=5432
   ```

3. **Run database migrations:**
   ```bash
   cd backend
   npx sequelize-cli db:migrate
   ```

### Running the Application

1. **Start the backend server:**
   ```bash
   cd backend
   npm start
   ```

2. **Start the frontend development server:**
   ```bash
   cd ../frontend
   npm run dev
   ```

The application will be available at `http://localhost:5173`.