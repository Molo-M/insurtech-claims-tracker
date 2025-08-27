import ClaimCard from "../components/claimCard"
import { useNavigate } from 'react-router-dom'
import claimsData from "../claimsData"
import ClaimsForm from "../components/ClaimsForm"
import { useState } from "react"

export default function Dashboard() {
    // Navigation functionalities
    const navigate = useNavigate()
    const handleClick = () => {
    navigate('/'); // Navigates to the /dashboard route
    }

    // Pull claims data to display it on dashboard
    const claims = claimsData.map(item => 
        <ClaimCard
            policyNum = {item.policyNum}
            incidentType = {item.incidentType}
            date = {item.date}
            status = {item.status}
        />)
    
    // Functionality for showing the claims form when you click on "Add New Claim" button
    const [formVisible, setFormVisible] = useState(false)
    function showForm() {
        setFormVisible(prevItem => !prevItem)
    }
    console.log(formVisible)
    return (
        <div className="body flex flex-col">
            <header className="flex py-3 px-7 items-center justify-end sm:gap-120 text-white bg-gray-700">
                <div className="title flex gap-2">
                    <img className="w-5" src="./Logo-edited.png" alt="" />
                    <h1 className="font-semibold text-xl">InsurTech Claims Tracker</h1>
                </div>
                <div className="logSearch flex gap-7">
                    <input className="border border-gray-300 rounded-sm p-1" type="search" name="" id="" placeholder="Search" />
                    <button className="text-lg cursor-pointer hover:font-semibold" onClick={handleClick}>Logout</button>
                </div>
            </header>
            <main className="flex flex-col gap-4 items-center py-5 bg-gray-100 h-screen">
                <div className="dashboard flex flex-col gap-4">
                    <div className="header flex justify-between items-center">
                        <h1 className="text-3xl font-semibold">My Claims</h1>
                        <button onClick={showForm} className="py-1 w-40 cursor-pointer rounded-xl border bg-sky-700 hover:bg-sky-800 text-white border-blue-900">Add New Claim</button>
                    </div>
                    <h2 className="text-gray-400">5 claims submitted</h2>
                    <nav className="filter flex justify-between mb-5">
                        <button>All</button>
                        <button>Submitted</button>
                        <button>In Review</button>
                        <button>Approved</button>
                        <button>Rejected</button>
                    </nav>
                    <section className="grid grid-cols-2 gap-10">
                        {claims}
                    </section>
                </div>
            </main>
            {/* showing the form for adding new claims  */}
            {formVisible && <section className="form flex  fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <ClaimsForm />
                <button onClick={showForm} className="font-semibold text-xl cursor-pointer fixed top-5 right-5">x</button>
            </section>}
        </div>
    )
}