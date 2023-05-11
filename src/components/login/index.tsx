import React, { useState } from "react";
import { Grid, Paper, TextField, Button, Typography, IconButton } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { createBrowserHistory } from 'history';
const theme = createTheme({
  palette: {
    primary: {
      main: "#1e5288"
    }
  }
});

const Login: React.FC = () => {
    const history = createBrowserHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
    // Add your login logic here
    history.push("../dashboard/");
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100vh", bgcolor: "#1e5288" }}
      >
        <Grid item xs={12} sm={8} md={6} lg={4}>
        <Typography variant="h4" align="center" gutterBottom>
    League Table
  </Typography>
          <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h5" align="center" color="#1e5288" gutterBottom>
          Login to Your Account
  </Typography>
  <Typography variant="h6" align="center" color="#000000" gutterBottom sx={{ fontSize: "15px" }}>
  Enter your username & password to login
</Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                <TextField
  fullWidth
  label="Username"
  variant="filled"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <AccountCircle />
      </InputAdornment>
    ),
  }}
  sx={{ borderRadius: "10px" }}
/>
                </Grid>
                <Grid item xs={12}>
                <TextField
  fullWidth
  label="Password"
  variant="filled"
  type={showPassword ? "text" : "password"}
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <IconButton onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    ),
  }}
/>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" fullWidth type="submit">
                    Login
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
