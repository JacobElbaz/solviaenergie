import { Button, TextField } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/fr'

function EligiForm() {
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
  }
  return (
    <div className='formulaire'>
      <div className='form-header'>
        <h1>Formulaire d'éligibilité aux aides et subventions</h1>
        <p>Remplissez le formulaire ci dessous et Testez votre éligibilité aux aides de l'État pour votre projet</p>
      </div>
      <form onSubmit={handleSubmit}>
        <TextField label='Nom' variant='outlined' required/>
        <TextField label='Prénom' variant='outlined' />
        <TextField type='email' label='E-mail' variant='outlined' required/>
        <TextField type='tel' label='Téléphone' variant='outlined' required/>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'fr'}>
          <DesktopDatePicker
            label="Date de naissance"
            inputFormat="DD/MM/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <TextField label='Adresse' variant='outlined' />
        <Button type='submit'>Suivant</Button>
      </form>
    </div>
  )
}

export default EligiForm