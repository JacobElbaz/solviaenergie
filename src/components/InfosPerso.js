import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs'
import 'dayjs/locale/fr'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function AddressForm() {
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
  const [user, setUser] = React.useState({firstName: null, lastName: null, email: null, address: null, tel: null, date: null})

  const updateUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
  }

  const handleChangeDate = (newValue) => {
    setValue(newValue);
    let date = newValue.$D.toString() + '/' + (newValue.$M + 1).toString() + '/' + newValue.$y.toString()
    setUser({...user, date: date})
  };

  const handleChange = (e) => {
    e.preventDefault()
    setUser({...user, [e.target.id]: e.target.value})
  }

  React.useEffect(() => {
    updateUser(user)
  }, [handleChange, handleChangeDate])

  


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Situation personnelle
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="firstName"
            name="firstName"
            label="Prénom"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Nom"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            type='email'
            name="email"
            label="E-mail"
            fullWidth
            autoComplete="email"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address"
            name="address"
            label="Adresse"
            fullWidth
            autoComplete="shipping address-line"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="tel"
            name="tel"
            label="Téléphone"
            fullWidth
            autoComplete="shipping tel"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'fr'}>
          <DesktopDatePicker
            id="date"
            label="Date de naissance"
            inputFormat="DD/MM/YYYY"
            value={value}
            onChange={handleChangeDate}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}