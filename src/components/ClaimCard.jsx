import { useState } from "react"

export default function ClaimCard(props) {
    // Functionality for status color (e.g Rejected is red)
    const colors = {
        "Submitted": "bg-gray-300",
        "In Review": "bg-yellow-200",
        "Approved": "bg-green-200",
        "Rejected": "bg-red-200"
    }
    // Functionality for showing claims details 
    const [showDetails, setShowDetails] = useState(false)
    function toggleDetails() {
        setShowDetails(prevItem => !prevItem)
    }
    return (
        <article className="w-75 flex flex-col gap-2 bg-white border border-gray-400 shadow-sm p-4 rounded-sm">
            <h1 className="font-bold">Policy Number: {props.policyNum}</h1>
            <h2>Incident Type: {props.incidentType}</h2>
            <div className="claims_date flex justify-between">
                <h2>Date: {props.date}</h2>
                <span className={`claim_status py-1 px-2 ${colors[props.status]} rounded-sm`}>{props.status}</span>
            </div>
            {showDetails && <div className="details flex flex-col gap-3 py-5">
                <img className="" src={props.img} alt="" />
                <p className="">{props.description}</p>
            </div>}
            <button onClick={toggleDetails} className="border border-gray-300 shadow-sm p-2 cursor-pointer hover:bg-gray-100">{showDetails ? "Hide" : "Show"} Details</button>
        </article>
    )
}