import ClaimCard from "../components/claimCard"
import { useNavigate } from 'react-router-dom'
import data from "../claimsData"
import ClaimsForm from "../components/ClaimsForm"
import { useState } from "react"

export default function Dashboard() {
    // Navigation functionalities
    const navigate = useNavigate()
    const handleClick = () => {
    navigate('/'); // Navigates to the /dashboard route
    }

    // Functionality for filtering the claim cards
    const buttonColors = {
        "All": false,
        "Submitted": false,
        "In Review": false,
        "Approved": false,
        "Rejected": false
    }
    const [filterColor, setFilterColor] = useState(buttonColors)
    const [claimsData, setClaimsData] = useState(data)
    function filterClaim(event) {
        const buttonValue = event.target.value;

        // Step 1: filter claims
        if (buttonValue === "All") {
            setClaimsData(data);
        } else {
            setClaimsData(data.filter(claim => claim.status === buttonValue));
        }

        // Step 2: reset colors and activate only the clicked button
        setFilterColor({
            "All": false,
            "Submitted": false,
            "In Review": false,
            "Approved": false,
            "Rejected": false,
            [buttonValue]: true  // highlight the clicked button
        });
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
            <header className="flex py-3 px-7 items-center justify-end sm:gap-120 text-white bg-gray-700">
                <div className="title flex gap-2">
                    <img className="w-5" src="./Logo-edited.png" alt="" />
                    <h1 className="font-semibold text-xl">InsurTech Claims Tracker</h1>
                </div>
                <div className="logSearch flex gap-7">
                    <input className="border border-gray-300 rounded-sm p-1" type="search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search" />
                    <button className="text-lg cursor-pointer hover:font-semibold" onClick={handleClick}>Logout</button>
                </div>
            </header>
            <main className="flex flex-col gap-4 items-center py-5 bg-gray-100">
                <div className="dashboard flex flex-col gap-4">
                    <div className="header flex justify-between items-center">
                        <h1 className="text-3xl font-semibold">My Claims</h1>
                        <button onClick={showForm} className="py-1 w-40 cursor-pointer rounded-xl border bg-sky-700 hover:bg-sky-800 text-white border-blue-900">Add New Claim</button>
                    </div>
                    <h2 className="text-gray-400">{claimsData.length} claims submitted</h2>
                    <nav className="filter flex justify-between mb-5">
                        <button onClick={filterClaim} className={filterColor["All"] ? "bg-gray-200" : "bg-white"} value="All">All</button>
                        <button onClick={filterClaim} className={filterColor["Submitted"] ? "bg-gray-200" : "bg-white"} value="Submitted">Submitted</button>
                        <button onClick={filterClaim} className={filterColor["In Review"] ? "bg-gray-200" : "bg-white"} value="In Review">In Review</button>
                        <button onClick={filterClaim} className={filterColor["Approved"] ? "bg-gray-200" : "bg-white"} value="Approved">Approved</button>
                        <button onClick={filterClaim} className={filterColor["Rejected"] ? "bg-gray-200" : "bg-white"} value="Rejected">Rejected</button>
                    </nav>
                    <section className="grid grid-cols-2 gap-10 items-start">
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