import React, { useState } from 'react';
import { Button, TextField, Link, Box, Typography, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      // Make the API call to authenticate the user
      const response = await fetch("http://localhost:8000/api/user/login-user", {
        method: "POST", // Ensure it's a POST request
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }), // Send the credentials in the body
      });

      if (response.ok) { // Check if the response is successful
        const data = await response.json();
        localStorage.setItem("user", JSON.stringify(data.data)); // Store user data in local storage
        console.log("User logged in and stored in localStorage:", data);
        navigate('/dashboard'); // Redirect to the dashboard
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mt: 1, mb: 3 }}>
            Sign in and start managing your candidates!
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleLogin}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="login"
              label="Login"
              name="login"
              autoComplete="login"
              autoFocus
              onChange={(e) => setUsername(e.target.value)} // Update username state
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)} // Update password state
            />
            <Button
              type="submit" // Use "submit" to handle form submission
              fullWidth
              variant="contained"
              sx={{
                mt: 3, mb: 2, backgroundColor: '#4CAF50', '&:hover': {
                  backgroundColor: '#45a049'
                }
              }}
            >
              Login
            </Button>
            <Box display="flex" justifyContent="space-between">
              <Link href="#" variant="body2" sx={{ mt: 2 }}>
                Forgot password?
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default LoginPage;
