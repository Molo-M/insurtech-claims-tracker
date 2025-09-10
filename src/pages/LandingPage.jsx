import logo from '/Logo-edited.png';
import notebook from "/notebook.png"
import Footer from "../components/Footer"

export default function LandingPage() {

    return (
        <>
            <header className="flex gap-2 items-center ml-3 sm:ml-58 pt-2 pb-3 sm:pb-10">
                <img className="w-5" src={logo} alt="" />
                <h1 className="font-semibold text-xl">InsurTech Claims Tracker</h1>
            </header>
            <main className='py-5 text-gray-800 flex flex-col sm:flex-row items-center justify-center sm:gap-15 px-10'>
                <div className="left-hero flex flex-col gap-4 sm:w-110">
                <h1 className='font-bold text-2xl sm:text-5xl'>Simplify Insurance Claims Tracking</h1>
                <h2 className='text-2xl'>Submit claims, track progress, and stay updated in real time.</h2>
                <div className="buttons mt-5 flex gap-5">
                    <a onClick={() => localStorage.setItem("userType", "user")} href="./dashboard.html" className="text-center py-2 w-40 cursor-pointer font-bold rounded-xl border bg-sky-700 hover:bg-sky-800 text-white border-blue-900">Login as User</a>
                    <a onClick={() => localStorage.setItem("userType", "agent")} href="./dashboard.html" className="text-center py-2 w-40 cursor-pointer font-bold rounded-xl border border-gray-400 hover:bg-gray-100">Login as Agent</a>
                </div>
                </div>
                <div className="right-hero mt-5 sm:mt-0">
                <img className='w-80' src={notebook} alt="" />
                </div>
            </main>
            <Footer />
        </>
    )
}