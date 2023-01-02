import { Button, Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'
import img1 from '../assets/carousel 1/1.jpg'
import img2 from '../assets/carousel 1/2.jpg'
import img3 from '../assets/carousel 1/3.jpg'
import img4 from '../assets/carousel 1/4.jpg'
import img5 from '../assets/carousel 1/5.jpg'
import img6 from '../assets/carousel 1/6.jpg'
import img7 from '../assets/carousel 2/7.jpg'
import img8 from '../assets/carousel 2/8.jpg'
import img9 from '../assets/carousel 2/9.jpg'
import img10 from '../assets/carousel 2/10.jpg'
import img11 from '../assets/carousel 2/11.jpg'
import img12 from '../assets/carousel 2/12.jpg'
import img13 from '../assets/carousel 2/13.jpg'
import { FormatQuote } from '@mui/icons-material'


function Realisations() {
  return (
    <Container className='realisations'>
      <div className='my-5'>
        <Typography variant='h3' color='primary' fontWeight='bold' textAlign='center' className='my-5'>Nos Réalisations</Typography>
        <Typography variant='h4' textAlign='center'><strong style={{ color: '#ff5722' }}>97%</strong> de nos clients sont satisfaits de nos services.</Typography>
      </div>
      <div className='carousel-container'>
        <Carousel className='carousel'>
          <CarouselItem>
            <img src={img1} alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src={img2} alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src={img3} alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src={img4} alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src={img5} alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src={img6} alt="" />
          </CarouselItem>
        </Carousel>
        <Carousel className='carousel'>
          <CarouselItem>
            <img src={img7} alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src={img8} alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src={img9} alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src={img10} alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src={img11} alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src={img12} alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src={img13} alt="" />
          </CarouselItem>
        </Carousel>
      </div>
      <Grid container justifyContent='space-evenly' my={10} textAlign='center'>
        <Grid item width={300}>
          <Typography variant='h6' color='primary' fontWeight='bold' >F.Damien, Projet Isolation Thermique Extérieur</Typography>
          <Typography color='grey'>Une équipe très sérieuse, un suivi impeccable, des travaux effectué rapidement.</Typography>
          <FormatQuote color='primary' />
        </Grid>
        <Grid item width={300}>
          <Typography variant='h6' color='primary' fontWeight='bold' >B.Olivier, Projet Installation Pompe à Chaleur</Typography>
          <Typography color='grey'>Je recommande, le bureau d'études Solvia Energie sont disponible tout le temps, des techniciens très compétent, j'avais une chaudière fioul que j'ai remplacé par une Pompe à chaleur, le projet c'est très bien passé. un excellent suivi.    </Typography>
          <FormatQuote color='primary' />
        </Grid>
        <Grid item width={300}>
          <Typography variant='h6' color='primary' fontWeight='bold' >T.Claire, Projet Calorifugeage</Typography>
          <Typography color='grey'>Rapide et efficace, je recommande.</Typography>
          <FormatQuote color='primary' />
        </Grid>
      </Grid>
      <Paper>
        <div className='description'>
          <Typography variant='h5' color="primary">Solvia Energie</Typography>
          <Typography>Installateur certifié Reconnu Garant de l'Environnement, spécialiste en génie climatique et conseiller en économie d'énergie. Nous allons vous accompagner dans la réalisation de votre projet de transition énergétique  de l'éllaboration  du dossier d'aides à l'installation du matériels</Typography>
          <Button href='#contact'>Parlez nous de votre projet</Button>
        </div>
      </Paper>
    </Container>
  )
}

export default Realisations