import React, { useState, useContext  } from 'react';
import { Typography, Box, Card, CardContent, Divider, Pagination, List, ListItem, ListItemText, Paper, Stack } from '@mui/material';
import { MyContext } from '../context/ProjectContext';

const ProjectOverview = () => {
  const {obj, setObj } = useContext(MyContext);
  const data = obj;
  console.log("data: ", data);
  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom align="center">
            {data["Project Information"]["Project Title"]}
          </Typography>
          <Divider sx={{ mb: 3 }} />

          {page === 1 && (
            <Stack spacing={2}>
              <Typography variant="h6"><strong>Project Requirements</strong></Typography>
              <Typography><strong>Timeline:</strong></Typography>
              <Typography>• Start Date: {data["Project Information"].Timeline["Start Date"]}</Typography>
              <Typography>• End Date: {data["Project Information"].Timeline["End Date"]}</Typography>
              <Typography mt={2}><strong>Budget</strong></Typography>
              {Object.entries(data["Project Information"].Budget).map(([key, value]) => (
                <Typography key={key}>• {key}: ${value.toLocaleString()}</Typography>
              ))}
            </Stack>
          )}

          {page === 2 && (
            <Stack spacing={2}>
              <Typography variant="h6"><strong>Technical Requirements</strong></Typography>
              <Typography><strong>Platform:</strong> {data["Project Information"]["Technical Requirements"].Platform}</Typography>
              <Typography><strong>Database:</strong> {data["Project Information"]["Technical Requirements"].Database}</Typography>
              <Typography><strong>Integration:</strong> {data["Project Information"]["Technical Requirements"].Integration}</Typography>
              <Typography><strong>Languages:</strong></Typography>
              <List>
                {data["Project Information"]["Technical Requirements"].Languages.map((lang, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemText primary={`• ${lang}`} />
                  </ListItem>
                ))}
              </List>
            </Stack>
          )}

          {page === 3 && (
            <Stack spacing={2}>
              <Typography variant="h6"><strong>Team Size Requirements</strong></Typography>
              {Object.entries(data["Project Information"]["Team Size Requirements"]).map(([role, count], index) => (
                <Typography key={index}>• {role}: {count}</Typography>
              ))}
            </Stack>
          )}

          {page === 4 && (
            <Stack spacing={2}>
              <Typography variant="h6"><strong>Project Milestones</strong></Typography>
              <List>
                {data["Project Information"]["Project Milestones"].map((milestone, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={`${milestone.Milestone} - ${milestone.Date}`} />
                  </ListItem>
                ))}
              </List>
            </Stack>
          )}

          {page === 5 && (
            <Stack spacing={2}>
              <Typography variant="h6"><strong>Deliverables</strong></Typography>
              <List>
                {data["Project Information"]["Deliverables"].map((deliverable, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={`• ${deliverable.Deliverable}`} />
                  </ListItem>
                ))}
              </List>
            </Stack>
          )}

          {page === 6 && (
            <Stack spacing={2}>
              <Typography variant="h6"><strong>Task Breakdown</strong></Typography>
              <List>
                {data["Task Breakdown"].map((task, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={`${task.Task} - ${task["Estimated Timeline"]}`} />
                  </ListItem>
                ))}
              </List>
            </Stack>
          )}
        </CardContent>
      </Card>

      <Pagination
        count={6}
        page={page}
        onChange={handlePageChange}
        sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}
        color="primary"
      />
    </Box>
  );
};

export default ProjectOverview;
