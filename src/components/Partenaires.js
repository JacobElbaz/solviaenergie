import React from 'react'
import domofinance from '../assets/domofinance.png'
import rge from '../assets/rge.png'
import qualibat from '../assets/qualibat.avif'
import garantie from '../assets/garantie.png'
import smabtp from '../assets/smabtp.png'
import './Partenaires.css'
import { Paper } from '@mui/material'

function Partenaires() {
  return (
    <div className='partenaires'>
      <h1>Ils nous font confiance</h1>
      <Paper elevation={5}>
        <a href="https://www.domofinance.com/" target='_blank' rel="noopener noreferrer"><img src={domofinance} alt="" /></a>
        <a href="https://www.qualibat.com/nos-missions/le-rge/" target="_blank" rel="noopener noreferrer"><img src={qualibat} alt="" /></a>
        <a href="https://www.eco-artisan.net/" target="_blank" rel="noopener noreferrer"><img src={rge} alt="" /></a>
        <a href="https://www.service-public.fr/particuliers/vosdroits/F2034" target="_blank" rel="noopener noreferrer"><img src={garantie} alt="" /></a>
        <a href="https://www.groupe-sma.fr/" target="_blank" rel="noopener noreferrer"><img src={smabtp} alt="" /></a>
      </Paper>
    </div>
  )
}

export default Partenaires