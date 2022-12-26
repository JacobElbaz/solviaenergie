import { Button, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import './Solutions.css'
import calo from '../assets/calo.webp'
import pac from '../assets/pac.webp'
import iso from '../assets/iso.webp'

function Solutions() {
  return (
    <div className='solutions-container'>
      <Typography variant='h2' color='white'>Quel est votre projet ?</Typography>
      <div className='solutions'>
        <Card className='solution'>
          <img src={pac} />
          <CardContent>
            <h2><a href="/">Pompe a chaleur</a></h2>
            <p>La pompe à chaleur peut être le système de chauffage idéal pour votre logement. Elle prélève des calories à l'extérieur, dans l'air, l'eau ou le sol, puis les transforme pour assurer le confort thermique. De ce fait, l'énergie électrique consommée est moindre par rapport à celle produite.</p>
            <Button href='/#contact'>Contactez-nous</Button>
          </CardContent>
        </Card>
        <Card className='solution'>
          <img src={calo} />
          <CardContent>
            <h2><a href="">Calorifugeage</a></h2>
            <p>Le calorifugeage désigne l'isolation des canalisations d'eau et de chauffage, permettant d'éviter les déperditions de chaleur, notamment dans le cas d'une canalisation qui passe dans une zone non chauffée.</p>
            <Button>Contactez-nous</Button>
          </CardContent>
        </Card>
        <Card className='solution'>
          <img src={iso} />
          <CardContent>
            <h2><a href="">Isolation exterieure</a></h2>
            <p>L'isolation des murs par l'extérieur obéit au principe suivant : la pose d'une enveloppe isolante tout autour du bâti de la maison. Une solution qui permet, notamment, d'éliminer les ponts thermiques. Ce sont des zones de faiblesse de l'isolation responsables d'une forte déperdition d'énergie dans votre logement.</p>
            <Button>Contactez-nous</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Solutions