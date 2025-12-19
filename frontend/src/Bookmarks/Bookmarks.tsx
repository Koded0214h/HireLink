import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Briefcase, DollarSign } from "lucide-react";
import { JobCard } from "../BrowseJobs/components/JobCard"

import { Header } from "../Components/Header"
import { Footer } from "../Components/Footer"



const bookmarkedJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    posted: "12/10/2024",
    status: "Open",
    is_bookmarked: true,
  },
  {
    id: 3,
    title: "Full Stack Engineer",
    company: "StartupXYZ",
    location: "New York, NY",
    type: "Full-time",
    salary: "$100,000 - $140,000",
    posted: "12/8/2024",
    status: "Open",
    is_bookmarked: true,
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "TechCorp Inc",
    location: "Remote",
    type: "Remote",
    salary: "$110,000 - $150,000",
    posted: "12/11/2024",
    status: "Open",
    is_bookmarked: true,
  },
  {
    id: 6,
    title: "Data Analyst",
    company: "DataDriven Co",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$70,000 - $95,000",
    posted: "12/9/2024",
    status: "Open",
    is_bookmarked: true,
  },
];


const Bookmarks = () => {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="grow max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Saved Jobs
          </h1>
          <p className="text-slate-500 text-lg">Jobs you've bookmarked for later</p>
        </div>

        <div className="space-y-4">
          {/* 2. Use the component inside the map */}
          {bookmarkedJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
    )
}

export default Bookmarks