// src/Dashboard/JobSeeker/types.ts

export interface Application {
  id: string;
  jobTitle: string;
  company: string;
  appliedDate: string;
  status: 'Applied' | 'Shortlisted' | 'Rejected' | 'Hired';
}

export interface DashboardStats {
  totalApplications: number;
  shortlisted: number;
  bookmarkedJobs: number;
  profileCompletion: number;
}

export interface StatusBreakdown {
  applied: number;
  shortlisted: number;
  rejected: number;
  hired: number;
}