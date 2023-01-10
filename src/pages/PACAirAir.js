import React from 'react'
import { Button, Container, Typography } from '@mui/material'
import image from '../assets/maison.webp'
import { Helmet } from 'react-helmet-async'

function PACAirAir() {
  return (
    <Container>
      <Helmet>
        <title>Solvia | Pompe à chaleur air-air</title>
        <meta name="description" content="La pompe à chaleur air-air utilise les calories de l'air, une énergie gratuite, pour chauffer efficacement et à moindre coût votre logement." />
      </Helmet>
      <Typography variant='h3' color='primary' fontWeight='bold' textAlign='center' className='my-5'>Pompe à chaleur Air/Air</Typography>
      <img src={image} alt="pompe à chaleur" className='page-img'/>
      <Typography variant='h4' component='h5' color='primary'>Tout savoir sur la pompe à chaleur Air-Air</Typography>
      <Typography fontStyle='italic'>La pompe à chaleur air-air utilise les calories de l'air, une énergie gratuite, pour chauffer efficacement et à moindre coût votre logement. Elle permet, en effet, de diviser par 3 votre facture de chauffage. Ces économies font de la pompe à chaleur air-air un système rentable en seulement quelques années.</Typography>
      <Typography variant='h5' color='primary'>Comment fonctionne une PAC air-air ?</Typography>
      <Typography>Le principe de fonctionnement de la pompe à chaleur air-air est simple. L'appareil capte les calories présentes dans l'air extérieur pour chauffer un logement. Pour fonctionner, la pompe à chaleur a besoin de deux unités. L'une, située à l'extérieur, récupère les calories de l'air et l'autre, à l'intérieur, la diffuse au sein du logement grâce à un ventilo-convecteur.</Typography>
      <Typography variant='h5' color='primary'>Vos factures de chauffage divisées par 3 !</Typography>
      <Typography>En utilisant l'énergie gratuite de l'air, vous ne payez que l'électricité nécessaire à la circulation du fluide caloporteur pour faire fonctionner la pompe à chaleur. Vous pouvez ainsi diviser vos factures de chauffage par 3. Ces économies permettent d'amortir en seulement quelques années le prix de la pompe à chaleur air-air qui varie entre 1.600 € et 2.800 € par unité intérieure installée.</Typography>
      <Typography variant='h5' color='primary'>Puis-je installer une PAC air-air chez moi ?</Typography>
      <Typography>L'installation d'une pompe à chaleur air-air est très simple. En effet, il suffit de disposer d'un jardin ou d'une cour pour y installer l'unité extérieure. Un conseil : choisissez un emplacement qui occasionne le moins de bruit pour le voisinage (distance minimale, éviter les angles et recoins qui renvoient le son). Il vous faut aussi un emplacement dans votre logement pour installer les unités intérieures. Les ventilo-convecteurs s'installent simplement au-dessus des portes des pièces à chauffer. La jonction entre les deux est assurée par un circuit de fluide frigorigène.</Typography>
      <Typography variant='h4' component='h5' color='primary'>ATTENTION IMPORTANT !!</Typography>
      <Typography fontWeight='bold'>Pour bénéficier des différentes aides mises en place par l'Etat , telles que celles de l'Anah ou les primes énergie, l'installation de votre PAC air-air doit être réalisée par un professionnel certifié Reconnu Garant de l'Environnement.</Typography>
      <div style={{ width: '100%', textAlign: 'center', marginTop: '50px' }}>
        <Button size='large' variant='contained' onClick={() => { window.location = '/#form' }}>Je teste mon éligibilité</Button>
      </div>
    </Container>
  )
}

export default PACAirAir