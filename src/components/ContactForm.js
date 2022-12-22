import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl, InputLabel, MenuItem, Select, TextareaAutosize } from '@mui/material';


const theme = createTheme();

export default function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const [solution, setSolution] = React.useState('')
  const handleChangeSolution = (e) => {
    setSolution(e.target.value)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="tel"
                  label="Telephone"
                  type="tel"
                  id="tel"
                  autoComplete="telephone"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Solution</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={solution}
                  label="Solution"
                  onChange={handleChangeSolution}
                >
                  <MenuItem value={"calorifugeage"}>Calorifugeage</MenuItem>
                  <MenuItem value={"pac"}>Pompe à chaleur</MenuItem>
                  <MenuItem value={"iso exterieure"}>Isolation extérieure</MenuItem>
                </Select></FormControl>
              </Grid>
              <Grid item xs={12}>
              <TextField
                  fullWidth
                  multiline
                  label='Message'
                  rows={3}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Envoyer
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}