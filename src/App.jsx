import './index.css'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/DashboardPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from "react"
import UserTypeContext from './utils/UserTypeContext'

export default function App() {
  // global state for user type
  const [userType, setUserType] = useState(null);

  return (
    <UserTypeContext.Provider value={{ userType, setUserType }}>
      <Router basename="/insurtech-claims-tracker">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/index.html" element={<LandingPage />} />
          <Route path="/insurtech-claims-tracker" element={<LandingPage />} />
          <Route path="https://molo-m.github.io/insurtech-claims-tracker/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </UserTypeContext.Provider>
  )
}
