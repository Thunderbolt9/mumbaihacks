import React, { useState } from 'react';
import { Tabs, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Navbar from '../components/Navbar';

const categoryData = {
  "DE Team": [
    { id: 1, name: 'Bhavesh', role: "Data Engineer", unit: "BFSI", availability: "Available" },
    { id: 2, name: 'Tejas', role: "Data Engineer", unit: "BFSI", availability: "Available" },
  ],
  "UI Team": [
    { id: 1, name: 'Arnab', role: "Senior Soft Engineer", unit: "BFSI", availability: "Available" },
    { id: 2, name: 'Anuja', role: "Soft Engineer", unit: "BFSI", availability: "Available" },
    { id: 3, name: 'Jitendra', role: "Soft Engineer", unit: "BFSI", availability: "Available" },
    { id: 4, name: 'Parag', role: "Associate Architect", unit: "BFSI", availability: "Available" },
  ],
  "ML Team": [
    { id: 1, name: 'Prajeesh', role: "Senior ML Engineer", unit: "GCP", availability: "Available" },
    { id: 2, name: 'Shudhatma Jain', role: "ML Engineer", unit: "BFSI", availability: "Available" },
  ],
  "PE Team": [
    { id: 1, name: 'Srijan', role: "Platform Engineer", unit: "AWS", availability: "Available" },
    { id: 2, name: 'Hitesh', role: "Platform Engineer", unit: "AWS", availability: "Available" },
  ]
};

const ResourceAllocation = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [addedEmployees, setAddedEmployees] = useState({});

  const handleTabChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  const handleToggle = (id) => {
    setAddedEmployees((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the current state of the clicked row
    }));
  };

  const categories = Object.keys(categoryData);

  return (
    <div>
      <Navbar />
      <Tabs style={{ marginTop: "2rem" }} value={selectedCategory} onChange={handleTabChange} centered>
        {categories.map((category) => (
          <Tab key={category} label={category} />
        ))}
      </Tabs>

      <TableContainer component={Paper} sx={{ marginTop: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Unit</TableCell>
              <TableCell>Availability</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categoryData[categories[selectedCategory]].map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.role}</TableCell>
                <TableCell>{item.unit}</TableCell>
                <TableCell>{item.availability}</TableCell>
                <TableCell>
                  <button
                    style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
                    onClick={() => handleToggle(item.id)}
                  >
                    {addedEmployees[item.id] ? "Remove" : "Add"}
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ResourceAllocation;
