import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import ApplyModal from "../Components/ApplyModal";
import {
  MapPin,
  Briefcase,
  Calendar,
  DollarSign,
  ChevronLeft,
  Share2,
  Bookmark,
} from "lucide-react";

import { Header } from "../Components/JobSeekerHeader.tsx";
import { Footer } from "../Components/Footer.tsx";

const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    posted: "12/10/2024",
    status: "Open",
    description:
      "We are looking for an experienced Frontend Developer to join our team. You will be responsible for building responsive web applications using modern frameworks.",
    requirements:
      "5+ years of experience with React, TypeScript, and modern CSS. Strong understanding of web performance and accessibility.",
  },
  {
    id: 2,
    title: "Product Designer",
    company: "DesignHub",
    location: "Remote",
    type: "Remote",
    salary: "$90,000 - $130,000",
    posted: "12/12/2024",
    status: "Open",
    description:
      "Join our design team to create beautiful and intuitive user experiences for our SaaS product.",
    requirements:
      "3+ years of product design experience. Proficient in Figma, user research, and design systems.",
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
    description:
      "Build and maintain scalable web applications. Work across the entire stack from database to UI.",
    requirements:
      "Experience with Node.js, React, PostgreSQL. Understanding of cloud infrastructure (AWS/GCP).",
  },
  {
    id: 4,
    title: "Marketing Manager",
    company: "GrowthCo",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$80,000 - $110,000",
    posted: "12/14/2024",
    status: "Open",
    description:
      "Lead our marketing initiatives and develop strategies to grow our user base.",
    requirements:
      "4+ years in B2B SaaS marketing. Experience with content marketing, SEO, and analytics.",
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
    description:
      "Manage and improve our cloud infrastructure. Implement CI/CD pipelines and monitoring systems.",
    requirements:
      "Strong experience with Kubernetes, Docker, and cloud platforms. Knowledge of IaC tools like Terraform.",
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
    description:
      "Analyze data to provide actionable insights for business decisions.",
    requirements:
      "SQL, Python, data visualization tools (Tableau/PowerBI). Statistics background preferred.",
  },
];

const EachJob = () => {
  const { id } = useParams<{ id: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const job = jobs.find((j) => j.id === Number(id));

  if (!job) {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <div className="grow flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-slate-800">Job not found</h2>
            <Link to="/" className="text-blue-600 hover:underline mt-4 block">
              Go back home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="grow pb-20">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <Link
            to="/jobs"
            className="inline-flex items-center text-slate-500 hover:text-blue-600 mb-8 transition-colors font-medium"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to Jobs
          </Link>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                {job.title}
              </h1>
              <p className="text-xl text-slate-500 font-medium">
                {job.company}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-8 pb-8 border-b border-slate-100">
              <div className="flex items-center text-slate-500">
                <MapPin className="w-5 h-5 mr-3 text-slate-400" />
                {job.location}
              </div>

              <div className="flex items-center text-slate-500">
                <Briefcase className="w-5 h-5 mr-3 text-slate-400" />
                {job.type}
              </div>

              <div className="flex items-center text-slate-500">
                <DollarSign className="w-5 h-5 mr-3 text-slate-400" />
                {job.salary}
              </div>

              <div className="flex items-center text-slate-500">
                <Calendar className="w-5 h-5 mr-3 text-slate-400" />
                Posted {job.posted}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex-1 bg-indigo-600 text-white font-bold py-3.5 px-6 rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100 flex items-center justify-center gap-2"
              >
                Apply Now
              </button>

              <div className="flex gap-3">
                <button
                  className="p-3.5 border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-600 transition-colors"
                  title="Save Job"
                >
                  <Bookmark className="w-5 h-5" />
                </button>
                <button
                  className="p-3.5 border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-600 transition-colors"
                  title="Share Job"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex gap-3 mb-10">
              <span className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 font-medium text-sm border border-slate-200">
                {job.type}
              </span>
              <span className="px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 font-medium text-sm border border-emerald-100">
                {job.status}
              </span>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Job Description
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {job.description}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Requirements
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {job.requirements}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        jobTitle={job.title}
        companyName={job.company}
      />
    </div>
  );
};

export default EachJob;
