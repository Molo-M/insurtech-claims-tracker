import claimsData from "../claimsData"

export default function ClaimsForm({ onSendData }) {
    // Function for adding claim
    function addClaim(formData) {
        // get user input
        const policyNumber = formData.get("policyNumber")
        const incidentType = formData.get("incidentType")
        const incidentDate = formData.get("incidentDate")
        const description = formData.get("description")
        // add the input to the claims data
        claimsData.push({
            policyNum: policyNumber,
            incidentType: incidentType,
            date: incidentDate,
            description: description,
            status: "Submitted"
        })
    }

    // Handle form submit
    function handleSubmit(event) {
        event.preventDefault() // ⬅ stop page reset
        const formData = new FormData(event.target)
        addClaim(formData) // ⬅ Adds the form data to the claims data
        alert("You have added a new claim successfully!")
        onSendData(false) // Call the dashboard's callback function
    }

    // Function for adding submission message
    function showMessage() {
        alert("You have added a new claim successfully!")
    }
    return (
        <section className="w-130 bg-white border border-gray-400 shadow-md p-5 flex flex-col gap-3 rounded-sm">
            <h1 className="font-semibold text-2xl">Claim Submission Form</h1>
            <p className="text-gray-600">Fill out the form below to submit a new insurance claim.</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="input_item">
                    <label htmlFor="">Policy Number</label>
                    <input type="text" name="policyNumber" id="policyNumber" />
                </div>
                <div className="input_item">
                    <label htmlFor="">Incident Type</label>
                    <select className="border p-2" name="incidentType" id="incidentType">
                        <option disabled>Select incident type</option>
                        <option value="Car">Car</option>
                        <option value="Health">Health</option>
                        <option value="Property">Property</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="input_item">
                    <label htmlFor="">Incident Date</label>
                    <input type="date" name="incidentDate" id="incidentDate" />
                </div>
                <div className="input_item">
                    <label htmlFor="">Description</label>
                    <textarea className="border" name="description" id="description" rows={3}></textarea>
                </div>
                <div className="input_file flex flex-col">
                    <label htmlFor="">Upload Attachment</label>
                    <input type="file" name="upload" id="upload" />
                </div>
                <div className="form_buttons w-full flex justify-end gap-3">
                    <button type="reset" className="border-gray-400 hover:bg-gray-100">Reset</button>
                    <button type="submit" className="bg-sky-700 hover:bg-sky-800 text-white border-blue-900">Submit</button>
                </div>
            </form>
        </section>
    )
}