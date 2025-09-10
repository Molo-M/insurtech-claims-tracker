// App.jsx
import './index.css'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/DashboardPage'
import { useState, useEffect } from 'react';

export default function App() {
  const [pageType, setPageType] = useState(localStorage.getItem("pageType") || "Landing");

  return (
    <>
      {pageType === "Dashboard"
        ? <Dashboard setPageType={setPageType} />
        : <LandingPage setPageType={setPageType} />}
    </>
  )
}
