export default function ClaimCard(props) {
    return (
        <article className="w-75 flex flex-col gap-2 bg-white border border-gray-400 shadow-sm p-4 rounded-sm">
            <h1 className="font-bold">Policy Number: {props.policyNum}</h1>
            <h2>Incident Type: {props.incidentType}</h2>
            <div className="claims_date flex justify-between">
                <h2>Date: {props.date}</h2>
                <span className="p-1 bg-gray-400 rounded-sm">Submitted</span>
            </div>
            <button className="border border-gray-300 shadow-sm p-2 cursor-pointer hover:bg-gray-100">View Details</button>
        </article>
    )
}