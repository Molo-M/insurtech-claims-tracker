import Header from "../components/header"
import Footer from "../components/footer"
import Dashboard from "./DashboardPage";
import { useNavigate } from 'react-router-dom'

export default function LandingPage() {
    const navigate = useNavigate();

      const handleClick = () => {
        navigate('/dashboard'); // Navigates to the /dashboard route
      };
    return (
        <>
            <Header />
            <main className='py-5 text-gray-800 flex flex-col sm:flex-row items-center justify-center sm:gap-15 px-10'>
                <div className="left-hero flex flex-col gap-4 sm:w-110">
                <h1 className='font-bold text-2xl sm:text-5xl'>Simplify Insurance Claims Tracking</h1>
                <h2 className='text-2xl'>Submit claims, track progress, and stay updated in real time.</h2>
                <div className="buttons mt-5 flex gap-5">
                    <button onClick={handleClick} className="py-2 w-40 cursor-pointer font-bold rounded-xl border bg-sky-700 hover:bg-sky-800 text-white border border-blue-900">Login as User</button>
                    <button onClick={handleClick} className="py-2 w-40 cursor-pointer font-bold rounded-xl border border-gray-400 hover:bg-gray-100">Login as Agent</button>
                </div>
                </div>
                <div className="right-hero mt-5 sm:mt-0">
                <img className='w-80' src="notebook.png" alt="" />
                </div>
            </main>
            <Footer />
        </>
    )
}