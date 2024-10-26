import React from 'react'
import ProfilePic from "../assets/profile_pic.jpg"
import "../styles/navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
        <h2>Logo</h2>
        <div style={{display: "flex", gap: "1rem", alignItems: "center"}}>
            <h4>Kishore</h4>
            <img src={ProfilePic} style={{borderRadius: "50%", width: "1.8rem"}}/>
        </div>
      </div>
  )
}

export default Navbar