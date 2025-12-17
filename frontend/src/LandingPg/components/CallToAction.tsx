export default function CallToAction() {
    return (
        <section className="bg-indigo-700 py-20 text-center text-white">
            <h3 className="text-xl font-semibold">Ready to Get Started?</h3>
            <p className="mt-4 text-[18px] text-blue-100">Join thousands of job seekers and employers using HireLink</p>
            <div className="mt-8 flex justify-center gap-4">
                <button className="rounded text-black bg-white px-6 py-3 font-bold">Create Free Account</button>
                <button className="rounded border px-6 py-3 font-bold">Browse Jobs</button>
            </div>
        </section>
    );
}