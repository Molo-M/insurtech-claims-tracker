export default function ClaimsForm() {
    return (
        <section className="w-130 bg-white border border-gray-400 shadow-md p-5 flex flex-col gap-3 rounded-sm">
            <h1 className="font-semibold text-2xl">Claim Submission Form</h1>
            <p className="text-gray-600">Fill out the form below to submit a new insurance claim.</p>
            <form className="flex flex-col gap-4" action="">
                <div className="input_item">
                    <label htmlFor="">Policy Number</label>
                    <input type="text" name="policyNumber" id="policyNumber" />
                </div><div className="input_item">
                    <label htmlFor="">Incident Type</label>
                    <select className="border p-2" name="incidentType" id="incidentType">
                        <option disabled>Select incident type</option>
                        <option value="car">Car</option>
                        <option value="health">Health</option>
                        <option value="property">Property</option>
                        <option value="other">Other</option>
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
                    <button className="border-gray-400 hover:bg-gray-100">Reset</button>
                    <button className="bg-sky-700 hover:bg-sky-800 text-white border-blue-900">Submit</button>
                </div>
            </form>
        </section>
    )
}