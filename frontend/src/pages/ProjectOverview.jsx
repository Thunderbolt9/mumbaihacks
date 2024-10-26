import React, { useState } from 'react';
import { Typography, Box, Card, CardContent, Divider, Pagination, List, ListItem, ListItemText, Paper, Stack } from '@mui/material';

const projectData = {
  "message": "Project Created",
  "data": {
    "Project Information": {
      "Project Title": "Customer Relationship Management (CRM) System Implementation for ABC Corp.",
      "Timeline": {
        "Start Date": "January 1, 2024",
        "End Date": "December 31, 2024"
      },
      "Budget": {
        "Total Project Budget": 500000,
        "Development Costs": 300000,
        "Testing Costs": 100000,
        "Training and Support Costs": 100000
      },
      "Technical Requirements": {
        "Platform": "Microsoft Dynamics 365",
        "Languages": ["C#", "JavaScript"],
        "Integration": "REST APIs for ERP and Email Systems",
        "Database": "Microsoft SQL Server"
      },
      "Team Size Requirements": {
        "Project Manager": 1,
        "Business Analyst": 2,
        "Developers": 5,
        "QA Engineers": 3,
        "Deployment Specialists": 2,
        "Trainers": 2
      },
      "Project Milestones": [
        { "Milestone": "Completion of Requirement Gathering", "Date": "March 1, 2024" },
        { "Milestone": "Design Approval", "Date": "May 1, 2024" },
        { "Milestone": "Development Phase Complete", "Date": "August 31, 2024" },
        { "Milestone": "System Testing Complete", "Date": "October 15, 2024" },
        { "Milestone": "Deployment Complete", "Date": "November 15, 2024" },
        { "Milestone": "Post-deployment Support and Training Complete", "Date": "December 31, 2024" }
      ],
      "Deliverables": [
        { "Deliverable": "Requirement Documentation" },
        { "Deliverable": "CRM System Design Document" },
        { "Deliverable": "CRM Application Prototype" },
        { "Deliverable": "Fully Developed CRM System" },
        { "Deliverable": "Testing and QA Reports" },
        { "Deliverable": "Deployment Scripts and Documentation" },
        { "Deliverable": "Training Materials" }
      ]
    },
    "Task Breakdown": [
      { "Task": "Requirement Gathering and Analysis", "Estimated Timeline": "January 1, 2024 - March 1, 2024" },
      { "Task": "System Design and Architecture", "Estimated Timeline": "March 1, 2024 - May 1, 2024" },
      { "Task": "Development and Customization", "Estimated Timeline": "May 1, 2024 - August 31, 2024" },
      { "Task": "Integration with Existing Systems", "Estimated Timeline": "May 1, 2024 - August 31, 2024" },
      { "Task": "Quality Assurance and Testing", "Estimated Timeline": "August 31, 2024 - October 15, 2024" },
      { "Task": "Deployment and Post-deployment Support", "Estimated Timeline": "October 15, 2024 - November 15, 2024" },
      { "Task": "Training and Documentation", "Estimated Timeline": "October 15, 2024 - December 31, 2024" }
    ]
  }
};

const ProjectOverview = () => {
  const { data } = projectData;
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
