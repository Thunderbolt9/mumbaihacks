import React, {useState, useContext } from 'react';
import { Box, Card, CardContent, Typography, Grid2, Fab, IconButton, Avatar, TextField, InputAdornment } from '@mui/material';
import "../styles/dashboard.css";
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';
import OverlayForm from '../components/OverlayForm';
import { useNavigate } from 'react-router-dom';


export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const navigate =  useNavigate();

  const projectInfo = [
    {
      "id": 1,
      "title": "P44",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
      "status": "In progress"
    },
    {
      "id": 2,
      "title": "Internal Tools",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
      "status": "Completed"
    },
    {
      "id": 3,
      "title": "LMI",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy..",
      "status": "In progress"
    },
    {
      "id": 4,
      "title": "Bioniq",
      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
      "status": "In progress"
    }
  ]

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    navigate("/overview")
  };

  return (
    <div className='dashboard'>
      <OverlayForm open={open} setOpen={setOpen} handleClose={handleClose} />
      <Navbar />
      <div className='main'>
        <div className='heading'>
          <h3>Projects</h3>
          <button className='createBtn' onClick={handleClickOpen}>Create</button>
        </div>

        <Grid2 container spacing={5}>
          {projectInfo.map((data) => (
            <ProjectCard key={data.id} data={data} />
          ))}
        </Grid2>
      </div>
    </div>
  );
}
