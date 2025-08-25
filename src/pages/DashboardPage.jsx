import ClaimCard from "../components/claimCard"

export default function Dashboard() {
    return (
        <main className="flex flex-col gap-4 items-center py-5 bg-gray-100">
            <div className="dashboard flex flex-col gap-4">
                <div className="header flex justify-between items-center">
                    <h1 className="text-3xl font-semibold">My Claims</h1>
                    <button className="py-1 w-40 cursor-pointer rounded-xl border bg-sky-700 hover:bg-sky-800 text-white border-blue-900">Add New Claim</button>
                </div>
                <h2 className="text-gray-400">5 claims submitted</h2>
                <nav className="filter flex justify-between">
                    <button>All</button>
                    <button>Submitted</button>
                    <button>In Review</button>
                    <button>Approved</button>
                    <button>Rejected</button>
                </nav>
                <section className="grid grid-cols-2 gap-10">
                    <ClaimCard
                        policyNum = {123456}
                        incidentType = "Car"
                        date = "Aug 18, 2025"
                    />
                    <ClaimCard
                        policyNum = {123456}
                        incidentType = "Car"
                        date = "Aug 18, 2025"
                    />
                </section>
            </div>
        </main>
    )
}