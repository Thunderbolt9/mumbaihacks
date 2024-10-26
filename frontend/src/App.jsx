import LoginPage from './pages/LoginPage'
import "./App.css"
import Dashboard from './pages/Dasboard'
import ResourceAllocation from './pages/ResourceAllocation'
import ProjectOverview from "./pages/ProjectOverview"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/resourceallocation" element={<ResourceAllocation />} /> */}
          <Route path="/overview" element={<ProjectOverview />} />
        </Routes>
    </Router>
    </>
  )
}

export default App
