import './index.css'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/DashboardPage'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from "react"
import UserTypeContext from './utils/UserTypeContext'

export default function App() {
  
  return (
    <LandingPage />
  )
}
