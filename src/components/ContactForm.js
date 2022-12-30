import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, FormControl, InputLabel, MenuItem, Select, ThemeProvider } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import emailjs from '@emailjs/browser';

const theme = createTheme({
  palette: {
    primary: {
      main: deepOrange[50]
    }
  },
  typography: {
    fontFamily: [
      'Questrial',
       '-apple-system',
        'BlinkMacSystemFont',
         'Segoe UI',
          'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    'sans-serif',].join(','),
    }
})

export default function ContactForm() {

  const form = React.useRef()

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      tel: data.get('tel'),
      solution: data.get('solution'),
      message: data.get('message')
    });

    console.log(form.current)
    console.log(data)

    emailjs.sendForm('service_0b8ior8', 'template_xharss9', form.current, 'mEYfRDD7YhHd42iLG')
            .then((result) => {
                alert("Message Sent , I will get back to you shortly", result.text);
            }, (error) => {
                alert("An error occurred, Please try again", error.text);
            });
  };

  const [solution, setSolution] = React.useState('')
  const handleChangeSolution = (e) => {
    setSolution(e.target.value)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" ref={form} onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Prenom"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Nom"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="E-mail"
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
                    name='solution'
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
                  name='message'
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