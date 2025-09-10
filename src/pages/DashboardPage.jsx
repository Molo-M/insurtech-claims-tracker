import ClaimCard from "../components/ClaimCard.jsx"
import '../index.css'
import data from "../claimsData"
import ClaimsForm from "../components/ClaimsForm"
import { useState } from "react"

export default function Dashboard() {

    // Functionality for filtering the claim cards
    const buttonColors = {
        "All": false,
        "Submitted": false,
        "In Review": false,
        "Approved": false,
        "Rejected": false
    }
    const [filterColor, setFilterColor] = useState(buttonColors)
    const [originalData, setOriginalData] = useState(data)
    const [claimsData, setClaimsData] = useState(originalData)
    function filterClaim(event) {
        const buttonValue = event.target.value

        // Filter claims
        if (buttonValue === "All") {
            setClaimsData(originalData)
        } else {
            setClaimsData(originalData.filter(claim => claim.status === buttonValue))
        }

        // Reset colors and activate only the clicked button
        setFilterColor({
            "All": false,
            "Submitted": false,
            "In Review": false,
            "Approved": false,
            "Rejected": false,
            [buttonValue]: true  // highlight the clicked button
        });
    }
    
    // This function will be passed to the claims card for changing status
    function handleStatusChange(policyNum, newStatus) {
        setOriginalData(prevClaims => {
            const updated = prevClaims.map(claim =>
                claim.policyNum === policyNum ? { ...claim, status: newStatus } : claim
            )
            setClaimsData(updated) // sync claimsData
            return updated
        })
    }
    // Functionality for filtering through the search input
    const [searchQuery, setSearchQuery] = useState("")
    // combine claimsData with search filter
    const filteredClaims = claimsData.filter(item =>
        item.policyNum.toString().includes(searchQuery.toLowerCase()) ||
        item.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.incidentType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.status.toLowerCase().includes(searchQuery.toLowerCase())
    )


    // Pull claims data to display it on dashboard
    const claims = filteredClaims.map(item => 
        <ClaimCard
            key = {item.policyNum}
            policyNum = {item.policyNum}
            incidentType = {item.incidentType}
            date = {item.date}
            status = {item.status}
            description = {item.description}
            img = {item.imgUrl}
            onStatusChange={handleStatusChange} // 👈 pass callback
        />)
    
    // Functionality for showing the claims form when you click on "Add New Claim" button
    const [formVisible, setFormVisible] = useState(false)
    function showForm() {
        setFormVisible(prevItem => !prevItem)
    }

    // Function for adding new claim to be passed down to the claimsForm component
    function addNewClaim(newClaim) {
        data.push(newClaim)
    }

    // Functionality for receiving data about closing form from claims form
    const handleChildData = (data) => {
        setFormVisible(data);
      }
    return (
        <div className="dashboard_body flex flex-col bg-gray-100 border h-screen">
            <header className="flex sm:flex-row flex-col py-3 px-3 sm:px-7 gap-5 sm:gap-30 md:gap-100 sm:items-center justify-end text-white bg-gray-700">
                <div className="title flex gap-2">
                    <img className="w-5" src="./Logo-edited.png" alt="" />
                    <h1 className="font-semibold text-xl">InsurTech Claims Tracker</h1>
                </div>
                <div className="logSearch flex justify-between sm:justify-start sm:gap-7">
                    <input className="border border-gray-300 rounded-sm p-1" type="search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search" />
                    <a href="./index.html" className="text-lg cursor-pointer hover:font-semibold">Logout</a>
                </div>
            </header>
            <main className="flex flex-col gap-4 items-center py-5 bg-gray-100">
                <div className="dashboard flex flex-col gap-4 px-3">
                    <div className="header flex flex-col sm:flex-row justify-start sm:justify-between sm:items-center gap-2">
                        <h1 className="text-3xl font-semibold">My Claims</h1>
                        <button onClick={showForm} className="py-1 w-40 cursor-pointer rounded-xl border bg-sky-700 hover:bg-sky-800 text-white border-blue-900">Add New Claim</button>
                    </div>
                    <h2 className="text-gray-400">{claimsData.length} claims submitted</h2>
                    <nav className="filter grid grid-cols-3 gap-2 sm:gap-0 sm:flex sm:justify-between sm:mb-5">
                        <button onClick={filterClaim} className={filterColor["All"] ? "bg-gray-200" : "bg-white"} value="All">All</button>
                        <button onClick={filterClaim} className={filterColor["Submitted"] ? "bg-gray-200" : "bg-white"} value="Submitted">Submitted</button>
                        <button onClick={filterClaim} className={filterColor["In Review"] ? "bg-gray-200" : "bg-white"} value="In Review">In Review</button>
                        <button onClick={filterClaim} className={filterColor["Approved"] ? "bg-gray-200" : "bg-white"} value="Approved">Approved</button>
                        <button onClick={filterClaim} className={filterColor["Rejected"] ? "bg-gray-200" : "bg-white"} value="Rejected">Rejected</button>
                    </nav>
                    <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 items-start">
                        {claims}
                    </section>
                </div>
            </main>
            {/* showing the form for adding new claims  */}
            {formVisible && <section className="form flex  fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <ClaimsForm onSendData={handleChildData} onAddClaim={addNewClaim}/>
                <button onClick={showForm} className="font-semibold text-xl cursor-pointer fixed top-5 right-5">x</button>
            </section>}
        </div>
    )
}