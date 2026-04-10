import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import './App.css'
import EmpDash from './Employer/EmpDash'
import EmpViewApp from './Employer/EmpViewApp'
import EmpSidebar from './Employer/EmpSidebar'
import EmpPostJob from './Employer/EmpPostJob'
import EmpAddEnq from './Employer/EmpAddEnq'
import EmpProfile from './Employer/EmpProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/employer/" element={<EmpSidebar/>} >
            <Route path="dashboard" element={<EmpDash />} />
            <Route path="viewApplicants" element={<EmpViewApp />} />
            <Route path="postJob" element={<EmpPostJob />} />
            <Route path="addEnq" element={<EmpAddEnq />} />
            <Route path="profile" element={<EmpProfile />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
