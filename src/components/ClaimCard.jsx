import { useState, useEffect } from "react"
// import { useContext } from "react"
// import UserTypeContext from "../utils/UserTypeContext.js"

export default function ClaimCard(props) {
    // Functionality for getting the user type
    const [userType, setUserType] = useState(null);

    useEffect(() => {
        const type = localStorage.getItem("userType");
        setUserType(type); // "user" or "agent"
    }, []);
    
    const userAgent = userType === "agent"

    // Functionality for updating claims stauts:
    const [newStatus, setNewStatus] = useState(props.status)
    // getting user type: regular user (false) and agent (true)
    // const { userType } = useContext(UserTypeContext)

    // state for displaying status drop-down options
    const [showDropdown, setShowDropdown] = useState(false)

    // function for displaying status dropdown menu
    function updateStatus() {
        // Send data up to parent
        if (showDropdown) {
            props.onStatusChange(props.policyNum, newStatus)
        }
        setShowDropdown(!showDropdown)
    }

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
            <div className={`claims_date flex ${showDropdown ? "flex-col gap-3" : "flex-row justify-between"}`}>
                <h2>Date: {props.date}</h2>
                {showDropdown ? 
                    <select  className="border p-2" name="statusType" id="statusType" onChange={e => setNewStatus(e.target.value)}>
                        <option>Select status type</option>
                        <option value="Submitted">Submitted</option>
                        <option value="In Review">In Review</option>
                        <option value="Approved">Approved</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                    :<span className={`claim_status py-1 px-2 ${colors[props.status]} rounded-sm`}>{props.status}</span>}
            </div>
            {showDetails && <div className="details flex flex-col gap-3 py-5">
                <img className="" src={props.img} alt="" />
                <p className="">{props.description}</p>
            </div>}
            <button onClick={toggleDetails} className="border border-gray-300 shadow-sm p-2 cursor-pointer hover:bg-gray-100">{showDetails ? "Hide" : "Show"} Details</button>
            {userAgent && <button onClick={updateStatus} className="border border-gray-300 bg-gray-600 text-white shadow-sm p-2 cursor-pointer hover:bg-gray-700">{showDropdown ? "Set" : "Update"} Status</button>}
        </article>
    )
}