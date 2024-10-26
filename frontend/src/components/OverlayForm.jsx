import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const OverlayForm = ({open, handleClose}) => {
  const [projectTitle, setProjectTitle] = useState('');
  const [description, setDescription] = useState('');
  const [preferredSkills, setPreferredSkills] = useState('');
  const [timeline, setTimeline] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    const formData = {
      projectTitle,
      description,
      preferredSkills,
      timeline,
    };

    // Log or send the data somewhere
    console.log("Form data submitted:", formData);
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
              label="Description"
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
              label="Timeline"
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
