import React from 'react'
import "../styles/hover.css"

function ProjectCard({data}) {
  return (
    <div className="hover-element" style={{cursor: "pointer", backgroundColor: "white", width: "28%", padding: "1rem", borderRadius: "0.5rem", boxShadow: "box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2)"}}>
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <h3>{data.title}</h3>
            <label>{data.status}</label>
        </div>
        <h5>{data.description}</h5>
    </div>
  )
}

export default ProjectCard