import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, FormControl, InputLabel, MenuItem, Select, ThemeProvider } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';
import emailjs from '@emailjs/browser';



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

    emailjs.sendForm('service_w6tdw56', 'template_qpfcuxu', form.current, 'DgrbULK3abKqPvWGP')
            .then((result) => {
                alert("Message envoyé, nous vous répondrons sous peu.", result.text);
            }, (error) => {
                alert("Une erreur s'est produite, veuillez réessayer.", error.text);
            });
  };

  const [solution, setSolution] = React.useState('')
  const handleChangeSolution = (e) => {
    setSolution(e.target.value)
  }

  return (
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
                  label="Prénom"
                  variant='filled'
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
                  variant='filled'
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
                  variant='filled'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="tel"
                  label="Téléphone"
                  type="tel"
                  id="tel"
                  autoComplete="telephone"
                  variant='filled'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant='filled'>
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
                  variant='filled'
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
  );
}