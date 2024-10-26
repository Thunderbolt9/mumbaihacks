import React, { useState } from 'react';
import { Button, TextField, Checkbox, FormControlLabel, Link, Box, Typography, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    // try {
    //   // Simulate API call for user authentication
    //   const response = await fetch("https://example.com/api/login", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ username, password }),
    //   });

    //   if (response.ok) {
    //     const data = await response.json();
    //     localStorage.setItem("user", JSON.stringify(data)); // Store user data in local storage
    //     console.log("User logged in and stored in localStorage:", data);
    //     // Optionally redirect to another page or update UI to reflect logged-in state
    //   } else {
    //     console.error("Login failed");
    //   }
    // } catch (error) {
    //   console.error("Error during login:", error);
    // }
    navigate('/dashboard');
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
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="login"
              label="Login"
              name="login"
              autoComplete="login"
              autoFocus
              onChange={(e) => setUsername(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3, mb: 2, backgroundColor: '#4CAF50', '&:hover': {
                  backgroundColor: '#45a049'
                }
              }}
              onClick={handleLogin}
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
