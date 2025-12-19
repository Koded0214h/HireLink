// src/Applications/MyApplications.tsx

import React, { useState } from 'react';
import { ApplicationCard } from './components/ApplicationCard';
import { Header } from '../Components/Header';
import { Footer} from '../Components/Footer';
import type { Application } from '../Dashboard/types';

const MyApplications: React.FC = () => {


  const [applications] = useState<Application[]>([
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
    <div className="min-h-screen bg-gray-50 ">
      {/* Header */}
      {/* <Header userName={user.name} userEmail={user.email} /> */}

      {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Page Title */}
            <div className="mb-8">
                <h1 className="text-2xl font-medium text-gray-900 mb-1">My Applications</h1>
                <p className="text-gray-500 text-sm">Track your job applications and their status</p>
            </div>

            {/* Applications Grid - Uses gap-4 for spacing between cards */}
            <div className="flex flex-col gap-4">
                {applications.map((application) => (
                    <ApplicationCard key={application.id} application={application} />
                ))}
            </div>
        </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};


export default MyApplications;
