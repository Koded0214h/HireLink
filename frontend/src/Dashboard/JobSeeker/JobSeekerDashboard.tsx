// src/Dashboard/JobSeeker/JobSeekerDashboard.tsx

import React, { useState, useEffect } from 'react';
import { FileText, TrendingUp, Bookmark, Briefcase } from 'lucide-react';
import { StatCard } from './components/StatCard';
import { ApplicationStatusBreakdown } from './components/ApplicationStatusBreakdown';
import { RecentApplications } from './components/RecentApplications';
import { Header } from '../../Components/Header';
import { Footer} from '../../Components/Footer';
import type { DashboardStats, StatusBreakdown, Application } from './types';

const JobSeekerDashboard: React.FC = () => {

  // Mock data - replace with actual API calls
  const [stats] = useState<DashboardStats>({
    totalApplications: 3,
    shortlisted: 1,
    bookmarkedJobs: 2,
    profileCompletion: 100,
  });

  const [statusData] = useState<StatusBreakdown>({
    applied: 2,
    shortlisted: 1,
    rejected: 0,
    hired: 0,
  });

  const [recentApplications] = useState<Application[]>([
    {
      id: '1',
      jobTitle: 'Senior Frontend Developer',
      company: 'TechCorp Inc',
      appliedDate: '12/11/2024',
      status: 'Shortlisted',
    },
    {
      id: '2',
      jobTitle: 'Full Stack Engineer',
      company: 'StartupXYZ',
      appliedDate: '12/9/2024',
      status: 'Applied',
    },
    {
      id: '3',
      jobTitle: 'DevOps Engineer',
      company: 'TechCorp Inc',
      appliedDate: '12/12/2024',
      status: 'Applied',
    },
  ]);

  const user = { name: 'John Doe', email: 'john@example.com' }; // Replace with actual user data

  return (
    <div className="min-h-screen bg-gray-50">
    
      {/* Header component */}
      <Header userName={user.name} userEmail={user.email} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mt-5 mb-8">
          <h1 className="text-2xl font-medium text-gray-800 mb-2">
            Welcome back, {user.name}!
          </h1>
          <p className="text-gray-600">Here's your job search overview</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Applications"
            value={stats.totalApplications}
            icon={<FileText className="w-5 h-5" />}
          />
          <StatCard
            title="Shortlisted"
            value={stats.shortlisted}
            icon={<TrendingUp className="w-5 h-5" />}
          />
          <StatCard
            title="Bookmarked Jobs"
            value={stats.bookmarkedJobs}
            icon={<Bookmark className="w-5 h-5" />}
          />
          <StatCard
            title="Profile Completion"
            value={`${stats.profileCompletion}%`}
            icon={<Briefcase className="w-5 h-5" />}
          />
        </div>

        {/* Status Breakdown */}
        <div className="mb-8">
          <ApplicationStatusBreakdown statusData={statusData} />
        </div>

        {/* Recent Applications */}
        <RecentApplications applications={recentApplications} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};


export default JobSeekerDashboard;