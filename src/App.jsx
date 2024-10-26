import LoginPage from './pages/LoginPage'
import "./App.css"
import Dashboard from './pages/Dasboard'
import ResourceAllocation from './pages/ResourceAllocation'
import ProjectOverview from "./pages/ProjectOverview"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MyContext } from "./context/ProjectContext";
import { useState } from 'react'


function App() {
  const [obj, setObj] = useState({});
  return (
    <>
    <MyContext.Provider value={{obj, setObj}}>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <Route path="/resourceallocation" element={<ResourceAllocation />} /> */}
            <Route path="/overview" element={<ProjectOverview />} />
          </Routes>
        </Router>
    </MyContext.Provider>
    </>
  )
}

export default App
