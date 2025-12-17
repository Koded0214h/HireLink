import { Briefcase, TrendingUp } from 'lucide-react';



export default function Hero() {
    return(
        <section className="mx-auto max-w-7xl px-6 py-20 text-center">
            <h1 className="text-4xl font-bold text-gray-900 text-[50px]">Find Your Dream Job or Top Talent</h1>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600 text-xl">A modern job board connecting employers with job seekers. Start your journey today.</p>
            <div className="mt-8 flex justify-center gap-4">
                <button className="rounded-md bg-blue-600 px-3 py-3 text-white flex  justify-center items-center w-30 h-10 bg-indigo-700 font-bold gap-x-1"><Briefcase className="h-4 w-4 transition-transform group-hover:translate-x-1" />Find Jobs</button>
                <button className="rounded-md border px-3 py-3 flex  justify-center items-center w-32 h-10  font-bold border border-gray-300 border-solid gap-x-1"><TrendingUp className="h-4 w-4 transition-transform group-hover:translate-x-1"/>Post a Job</button>
            </div>
        </section>
    )
}