import { Button, Container, Typography } from '@mui/material'
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


function Realisations() {
  return (
    <Container className='realisations'>
      <Typography variant='h3'>Nos Réalisations</Typography>
      <Typography variant='h4'>97% de nos clients sont satisfaits de notre service.</Typography>
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
      <div className='description'>
        <Typography>Installateur certifié Reconnu Garant de l'Environnement, spécialiste en génie climatique et conseiller en économie d'énergie. Nous allons vous accompagner dans la réalisation de votre projet de transition énergétique  de l'éllaboration  du dossier d'aides à l'installation du matériels</Typography>
        <Button href='#contact'>Parlez nous de votre projet</Button>
      </div>
    </Container>
  )
}

export default Realisations