import React from 'react'
import { Button, Container, Typography } from '@mui/material'
import video from '../assets/videos/pac.mp4'
import image from '../assets/pac-air-eau.jpg'
import { Helmet } from 'react-helmet-async'

function PACAirEau() {
  return (
    <Container>
      <Helmet>
        <title>Solvia | Pompe à chaleur air-eau</title>
        <meta name="description" content="La pompe à chaleur air-air utilise les calories de l'air, une énergie gratuite, pour chauffer efficacement et à moindre coût votre logement." />
      </Helmet>
      <Typography variant='h3' color='primary' fontWeight='bold' textAlign='center' className='my-5'>Pompe à chaleur Air/Eau</Typography>
      <div style={{textAlign: 'center'}}><video src={video} controls loop autoPlay muted></video></div>
      <Typography variant='h4' component='h5' color='primary'>Tout savoir sur la pompe à chaleur Air-Eau</Typography>
      <Typography fontStyle='italic'>La pompe à chaleur air-air utilise les calories de l'air, une énergie gratuite, pour chauffer efficacement et à moindre coût votre logement. Elle permet, en effet, de diviser par 3 votre facture de chauffage. Ces économies font de la pompe à chaleur air-air un système rentable en seulement quelques années.</Typography>
      <Typography variant='h5' color='primary'>Comment fonctionne une PAC air-eau ?</Typography>
      <Typography>A la différence de la pompe à chaleur air-air qui puise l'énergie dans l'air extérieur et la restitue sous forme d'air chaud, la pompe à chaleur air-eau, puise les calories dans l'air extérieur mais utilise l'eau pour transporter la chaleur. La plupart des modèles cessent de fonctionner dès que la température descend sous les -5°C, rendant indispensable un chauffage d'appoint dans certaines régions. Néanmoins, certains modèles, plus performants peuvent être opérationnels jusqu'à -25°C. Les performances de votre pompe à chaleur dépendent donc du climat de votre région. Cette solution n'est pas la plus adaptée lorsque votre région est soumise à des hivers rigoureux et des températures négatives. En effet, plus vous sollicitez l'électricité pour réchauffer l'eau de chauffage de votre installation, moins le rendement de votre pompe à chaleur air-eau est important et plus vous consommez d'énergie.</Typography>
      <img src={image} alt="pompe à chaleur" className='page-img'/>
      <Typography variant='h5' color='primary'>La pompe à chaleur air-eau se compose de quatre composants</Typography>
      <Typography>La pompe à chaleur air-eau se présente, pour la plupart des modèles, sous la forme d'un monobloc. Elle se compose de 4 éléments :
        <li>L'évaporateur qui permet la transformation du fluide frigorigène en vapeur ;</li>
        <li>Le compresseur qui augmente la pression et la chaleur du gaz ;</li>
        <li>Le condenseur qui permet au fluide frigorigène de restituer la chaleur à l'eau de chauffage ;</li>
        <li>Le détendeur qui diminue la pression et la température du gaz.</li></Typography>
      <Typography variant='h5' color='primary'>Le rendement de la pompe à chaleur air-eau</Typography>
      <Typography>Pour produire du chauffage, la pompe à chaleur air-eau consomme de l'électricité. Elle a notamment besoin d'un moteur électrique pour compresser le fluide frigorigène. Le rendement d'une pompe à chaleur est exprimé par son COP (Coefficient de performance). Il traduit la quantité de chaleur produite par rapport à l'énergie électrique consommée par le compresseur. Plus le COP est élevé, plus la pompe à chaleur est performante. Une pompe à chaleur air-eau ayant un coefficient de performance (COP) de 3 permet de restituer 3 kWh d'énergie thermique pour 1 kWh d'énergie électrique consommée.</Typography>
      <Typography variant='h4' component='h5' color='primary'>ATTENTION IMPORTANT !!</Typography>
      <Typography fontWeight='bold'>Pour bénéficier des différentes aides mises en place par l'Etat , telles que celles de l'Anah ou les primes énergie, l'installation de votre PAC air-air doit être réalisée par un professionnel certifié Reconnu Garant de l'Environnement.</Typography>
      <div style={{ width: '100%', textAlign: 'center', marginTop: '50px' }}>
        <Button size='large' variant='contained' onClick={() => { window.location = '/#form' }}>Je teste mon éligibilité</Button>
      </div>
    </Container>
  )
}

export default PACAirEau