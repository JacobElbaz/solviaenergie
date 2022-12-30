import { Grid } from '@mui/material'
import React from 'react'
import EligiForm from '../components/EligiForm'
import Feedback from '../components/Feedback'
import Partenaires from '../components/Partenaires'
import Solutions from '../components/Solutions'
import solvia from '../assets/videos/entreprise.mp4'

function Acceuil() {
  return (
    <div>
      <Grid container justifyContent='space-around' alignItems='center' className='head'>
        <Grid item>
          <video src={solvia} controls loop autoPlay muted></video>
        </Grid>
        <Grid item>
          <EligiForm />
        </Grid>
      </Grid>
      <Solutions />
      <Partenaires />
      <Feedback/>
    </div>
  )
}

export default Acceuil