import { FormatQuote } from '@mui/icons-material'
import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import damien from '../assets/damien.webp'
import claire from '../assets/claire.webp'
import olivier from '../assets/olivier.webp'

function Feedback() {
  return (
    <Container className='feedback'>
      <Grid container justifyContent='space-evenly' textAlign='center'>
        <Grid item width={300}>
          <img src={damien} alt=""  style={{width: '200px', borderRadius: '50%'}}/>
          <Typography color='primary' fontWeight='bold' >F.Damien, Projet Isolation Thermique Extérieur</Typography>
          <Typography>Une équipe très sérieuse, un suivi impeccable, des travaux effectué rapidement.</Typography>
          <FormatQuote color='primary'/>
        </Grid>
        <Grid item width={300}>
          <img src={olivier} alt=""  style={{width: '200px', borderRadius: '50%'}}/>
          <Typography color='primary' fontWeight='bold' >B.Olivier, Projet Installation Pompe à Chaleur</Typography>
          <Typography>Je recommande, le bureau d'études Solvia Energie sont disponible tout le temps, des techniciens très compétent, j'avais une chaudière fioul que j'ai remplacé par une Pompe à chaleur, le projet c'est très bien passé. un excellent suivi.    </Typography>
          <FormatQuote color='primary'/>
        </Grid>
        <Grid item width={300}>
          <img src={claire} alt="" style={{width: '200px', borderRadius: '50%'}}/>
          <Typography color='primary' fontWeight='bold' >T.Claire, Projet Calorifugeage</Typography>
          <Typography>Rapide et efficace, je recommande.</Typography>
          <FormatQuote color='primary'/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Feedback