import { Button, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import './Solutions.css'
import calo from '../assets/calo.webp'
import pac from '../assets/pac.webp'
import iso from '../assets/iso.webp'

function Solutions() {
  return (
    <div className='solutions-container'>
      <Typography variant='h2' color='white' fontWeight='bold' >Quel est votre projet ?</Typography>
      <div className='solutions'>
        <Card className='solution'>
          <div style={{ height: '150px', width: 'inherit', overflow: 'hidden' }}>
            <img src={pac} />
          </div>
          <CardContent className='card-content'>
            <Typography variant='h4'><a href="/pac-air-eau">Pompe à chaleur</a></Typography>
            <Typography>La pompe à chaleur peut être le système de chauffage idéal pour votre logement. Elle prélève des calories à l'extérieur, dans l'air, l'eau ou le sol, puis les transforme pour assurer le confort thermique. De ce fait, l'énergie électrique consommée est moindre par rapport à celle produite.</Typography>
            <Button href='/#contact'>Contactez-nous</Button>
          </CardContent>
        </Card>
        <Card className='solution'>
          <div style={{ height: '150px', width: 'inherit', overflow: 'hidden' }}>
            <img src={calo} />
          </div>
          <CardContent className='card-content'>
            <Typography variant='h4'><a href="/calorifugeage">Calorifugeage</a></Typography>
            <Typography>Le calorifugeage désigne l'isolation des canalisations d'eau et de chauffage, permettant d'éviter les déperditions de chaleur, notamment dans le cas d'une canalisation qui passe dans une zone non chauffée.</Typography>
            <Button href='/#contact'>Contactez-nous</Button>
          </CardContent>
        </Card>
        <Card className='solution'>
          <div style={{ height: '150px', width: 'inherit', overflow: 'hidden' }}>
            <img src={iso} />
          </div>
          <CardContent className='card-content'>
            <Typography variant='h4'><a href="/isolation-exterieur">Isolation exterieure</a></Typography>
            <Typography>L'isolation des murs par l'extérieur obéit au principe suivant : la pose d'une enveloppe isolante tout autour du bâti de la maison. Une solution qui permet, notamment, d'éliminer les ponts thermiques. Ce sont des zones de faiblesse de l'isolation responsables d'une forte déperdition d'énergie dans votre logement.</Typography>
            <Button href='/#contact'>Contactez-nous</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Solutions