import React, { useState, useContext  } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../context/ProjectContext';

const OverlayForm = ({open, handleClose}) => {
  const [projectTitle, setProjectTitle] = useState('');
  const [description, setDescription] = useState('');
  const [preferredSkills, setPreferredSkills] = useState('');
  const [timeline, setTimeline] = useState('');
  const {obj, setObj } = useContext(MyContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    const managerId = JSON.parse(localStorage.getItem('user')).user_id || 1;
    console.log("id", managerId.user_id);
    event.preventDefault();
    // Handle form submission logic here
    const formData = {
      projectTitle,
      description,
      preferredSkills,
      timeline,
      managerId,
    };
    try {
      // Make the API call to authenticate the user
      const response = await fetch("http://localhost:8000/api/project/create-project", {
        method: "POST", // Ensure it's a POST request
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData), // Send the credentials in the body
      });

      if (response.ok) { // Check if the response is successful
        const data = await response.json();
        //localStorage.setItem("user", JSON.stringify(data.data)); // Store user data in local storage
        console.log("response", data.data);
        setObj(data.data);
        navigate('/overview'); // Redirect to the dashboard
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
    handleClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Project Details</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              margin="dense"
              label="Project Title"
              type="text"
              fullWidth
              variant="outlined"
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
            />
            <TextField
              margin="dense"
              label="SOW"
              type="text"
              fullWidth
              variant="outlined"
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
              margin="dense"
              label="Preferred Skills"
              type="text"
              fullWidth
              variant="outlined"
              value={preferredSkills}
              onChange={(e) => setPreferredSkills(e.target.value)}
            />
            <TextField
              margin="dense"
              label="End Date"
              type="text"
              fullWidth
              variant="outlined"
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
            />
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OverlayForm;
