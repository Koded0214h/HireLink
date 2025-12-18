import { useState } from "react"
import { type EmployerDashboardStats, type StatusBreakdown } from "../types"
import { StatCard } from "../JobSeeker/components/StatCard"
import { Briefcase, FileSliders, TrendingUp, Users } from "lucide-react"
import { ApplicationStatusBreakdown } from "../JobSeeker/components/ApplicationStatusBreakdown"
import ActionButton from "./component/ActionButton"
import RecentlyPostedJobs from "./component/RecentlyPostedJobs"


const EmployerDashboard = () => {
    const [stats] = useState<EmployerDashboardStats>({
        activeJobs: 3,
        totalApplicants: 3,
        totalJobPosted: 1,
        shortlisted: 1
    })

    const [statusData] = useState<StatusBreakdown>({
        applied: 2,
        shortlisted: 1,
        rejected: 0,
        hired: 0,
    });

    const user = { userName: "Sarah Johnson", companyName: "TechCorp Inc" }
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <section className="mt-5 mb-8">
                <h1 className="text-2xl font-medium text-gray-800 mb-2">Welcome back, {user.userName}!</h1>
                <p className="text-gray-600">{user.companyName} Dashboard </p>
            </section>

            {/* Stats Card */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard
                    title="Active Jobs"
                    value={stats.activeJobs}
                    icon={<Briefcase className="w-5 h-5" />}
                />
                <StatCard
                    title="Total Applicants"
                    value={stats.totalApplicants}
                    icon={<Users className="w-5 h-5" />}
                />
                <StatCard
                    title="Total Jobs Posted"
                    value={stats.totalJobPosted}
                    icon={<FileSliders className="w-5 h-5" />}
                />
                <StatCard
                    title="Shrotlisted"
                    value={stats.shortlisted}
                    icon={<TrendingUp className="w-5 h-5 text-green-500" />}
                />
            </section>

            {/* Quick actions */}
            <section className="bg-white rounded-lg border border-gray-200 p-6">
                <h1 className="font-semibold text-black/80">Quick Actions</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 md:w-fit mt-8 ">
                    <ActionButton className="bg-[#4F46E5] text-white font-semibold" label="Post New Job"/>
                    <ActionButton className="border border-gray-200" label="Manage Jobs"/>
                    <ActionButton className="border border-gray-200" label="Edit Profile"/>
                </div>
            </section>

            {/* Recently posted jobs */}
            <section className="mt-6">
                <RecentlyPostedJobs/>
            </section>
        </main>
    )
}

export default EmployerDashboard