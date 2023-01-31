import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import emailjs from '@emailjs/browser';
import React from 'react'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Helmet } from 'react-helmet-async';

function Recrutement() {
  const form = React.useRef()

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      tel: data.get('tel'),
      poste: data.get('poste'),
      cv: data.get('cv'),
      motivations: data.get('motivations')
    });

    console.log(form.current)
    console.log(data)

    emailjs.sendForm('service_w6tdw56', 'template_nonwv29', form.current, 'DgrbULK3abKqPvWGP')
      .then((result) => {
        alert("Votre demande a bien été envoyée.", result.text);
      }, (error) => {
        alert("Un problème est survenu, veuillez réessayer plus tard.", error.text);
      });
  };

  const [poste, setPoste] = React.useState('')
  const handleChangePoste = (e) => {
    setPoste(e.target.value)
  }

  return (
    <Container maxWidth="xs">
      <Helmet>
        <title>Solvia | Recrutement</title>
        <meta name="description" content="Vous pouvez envoyez votre CV afin de postuler à l'un des postes vacants au sein de notre entreprise." />
      </Helmet>
      <Typography variant='h3' color='primary' fontWeight='bold' textAlign='center' className='my-5'>Nous recrutons</Typography>
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
                label="Téléphone"
                type="tel"
                id="tel"
                autoComplete="telephone"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Poste</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={poste}
                  label="Poste"
                  name='poste'
                  onChange={handleChangePoste}
                >
                  <MenuItem value={"designer graphique"}>Designer Graphique</MenuItem>
                  <MenuItem value={"chef de chantier"}>Chef de Chantier</MenuItem>
                  <MenuItem value={"commercial"}>Commercial Itinerant</MenuItem>
                  <MenuItem value={"telepro"}>Téléprospecteur</MenuItem>
                </Select></FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                component="label"
              >
                Importer votre CV <UploadFileIcon/>
                <input
                  type="file"
                  label='CV'
                  name='cv'
                  hidden
                />
              </Button><br/>
              Taille max 25Mo
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                label='Motivations'
                name='motivations'
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
            Postuler
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Recrutement