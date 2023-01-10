import { Button, Container, Typography } from '@mui/material'
import React from 'react'
import video from '../assets/videos/iso.mp4'
import image from '../assets/isolation.webp'
import { Helmet } from 'react-helmet-async'

function IsoExterieur() {
  return (
    <Container>
      <Helmet>
        <title>Solvia | Isolation Extérieure</title>
        <meta name="description" content="Principe et fonctionnement de l'isolation des murs par l'extérieur." />
      </Helmet>
      <Typography variant='h3' color='primary' fontWeight='bold' textAlign='center' className='my-5'>Isolation Thermique Extérieure</Typography>
      <div style={{textAlign: 'center'}}><video src={video} controls loop autoPlay muted></video></div>
      <Typography variant='h4' component='h5' color='primary'>Principe et fonctionnement de l'isolation des murs par l'extérieur</Typography>
      <Typography fontStyle='italic'>Avant de débuter des travaux d'isolation thermique (également connu sous le nom d'isolation thermique par l'extérieur [ITE]), et en particulier des travaux d'isolation des murs par l'extérieur, il est nécessaire de connaître quelques éléments de base : Les techniques d'isolation utilisent des enduits, des bardages ou des vêtures qui vont embellir l'aspect extérieur de votre maison. Isoler vos murs par l'extérieur nécessite une déclaration préalable de travaux ou dans certains cas une demande de permis de construire.</Typography>
      <Typography variant='h5' color='primary'>Une enveloppe isolante autour de la maison</Typography>
      <Typography>L'isolation des murs par l'extérieur obéit au principe suivant : la pose d'une enveloppe isolante tout autour du bâti de la maison. Une solution qui permet, notamment, d'éliminer les ponts thermiques. Ce sont des zones de faiblesse de l'isolation responsables d'une forte déperdition d'énergie dans votre logement. Les plus importants se situent aux jonctions suivantes : entre la toiture et les murs, entre les murs et les menuiseries des fenêtres, entre les planchers et les murs et entre les balcons et les murs. La vapeur d'eau se condense sur ces points plus froids, engendrant la formation de traces noires et de moisissures, comme l'explique l'Ademe. Le traitement des ponts thermiques, par ce type d'isolation, permet de limiter les effets de la condensation grâce à la continuité de l'isolant.</Typography>
      <Typography variant='h5' color='primary'>Une isolation de l'extérieur conçue pour réaliser des économies durant des décennies</Typography>
      <Typography>Le coût des travaux d'isolation par l'extérieur est important mais il s'agit d'un investissement durable et rentable. En effet, l'isolation de vos murs par l'extérieur vous permet de réaliser de substantielles économies et de voir diminuer votre facture de chauffage. Autre avantage de l'isolation des murs par l'extérieur, vous n'avez pas à quitter votre habitation pendant la durée des travaux. Vous pouvez ensuite profiter du confort thermique de votre maison pendant de très longues années, car une isolation par l'extérieur réalisée par un professionnel qualifié va se révéler efficace durant des décennies.</Typography>
      <Typography variant='h5' color='primary'>Des isolants possédant une longue durée de vie</Typography>
      <img src={image} alt="isolation" className='page-img'/>
      <Typography>Seule la laine de verre peut perdre de ses capacités isolantes au bout de 20 ans environ, sous l'effet de l'humidité, d'où l'intérêt de bien choisir ses matériaux avant de débuter les travaux. Pour le reste des isolants, il faut savoir que la laine de roche, le verre cellulaire, les plumes de canard ou le polystyrène expansé gardent des performances optimales entre 40 et 60 ans ; le liège, la laine de coco, le polystyrène extrudé ou encore le polyuréthane, quant à eux, atteignent les 100 ans. Autre performance, la laine de chanvre ou de la fibre de bois assurent l'isolation de votre logement pendant plus d'un siècle.</Typography>
      <Typography variant='h5' color='primary'>L'importance de l'intervention d'un professionnel</Typography>
      <Typography>Ces aides sont toutefois soumises à certaines conditions, dont la première est la réalisation de vos travaux par un installateur qualifié RGE. La complexité de l'isolation extérieure des murs, nécessitant la pose d'ossatures, selon la méthode choisie, pour permettre aux murs de respirer, est un argument en faveur de la nécessité de faire appel à un installateur. La difficulté est de préserver la continuité de l'isolant. De plus, celui-ci est à même de résoudre les problèmes liés notamment aux ponts thermiques, particulièrement si votre habitation dispose d'un balcon ou d'une terrasse. Enfin, il saura vous conseiller en fonction du matériau de vos murs (briques, béton, bois, terre crue, etc.) et de l'année de construction de votre logement, aspects déterminants dans le choix de la technique d'isolation.</Typography>
      <div style={{ width: '100%', textAlign: 'center', marginTop: '50px' }}>
        <Button size='large' variant='contained' onClick={() => { window.location = '/#form' }}>Je teste mon éligibilité</Button>
      </div>
    </Container>
  )
}

export default IsoExterieur