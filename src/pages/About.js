import { Accordion, AccordionDetails, AccordionSummary, Button, Container, Typography } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import logo from '../assets/logo-about.webp'
import React from 'react'
import { Helmet } from 'react-helmet-async'

function About() {
  return (
    <Container>
      <Helmet>
        <title>Solvia | Qui sommes-nous ?</title>
        <meta name="description" content="Solvia Energie est une societé RGE spécialisée dans les solutions énergétiques. Notre mission: Fournir des services de grande qualité à nos clients." />
      </Helmet>
      <Typography variant='h1' color='primary' fontWeight='bold' textAlign='center' sx={{ textAlign: 'center', margin: '70px auto', padding: '1rem' }}>A PROPOS DE NOUS</Typography>
      <Container sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        <Typography fontSize='20px' sx={{ maxWidth: '500px', textAlign: 'center' }}>Notre mission à <strong style={{ color: '#ff5722' }}>Solvia Energie</strong> est simple:<br /> Fournir des services de grande qualité à nos clients. Notre équipe fait tout pour répondre aux besoins spécifiques de chaque projet. Grâce à une communication transparente et à une qualité de service exceptionnelle, nous espérons que vous trouverez ce que vous cherchez en faisant appel à notre Service de rénovation de maison. Pour plus d'informations ou pour des demandes générales, contactez-nous dès aujourd'hui.</Typography>
        <img src={logo} alt="logo solvia" style={{ maxWidth: '100%' }} />
      </Container>
      <Container sx={{textAlign: 'center', marginBottom: '50px'}}>
        <Button variant='contained' href='/nos-realisations'>Nos Réalisations</Button>
        <Button href='/politiques'>Politique de confidentialité</Button>
      </Container>
      <Typography variant='h4' fontWeight='bold' sx={{ marginBottom: '50px' }}>QUESTIONS FREQUENTES</Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Quel est la durée moyenne d'une visite énergétique?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Une visite énergétique bien effectuer varie entre 1h et 1h30 minutes.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Que ce passe t'il si je ne fait pas autant d'économies que prévus?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Votre confort à la maison est autant important pour nous que votre confort financier. Pour ce fait, un control annuel est effectuer pendant les 10 ans de garanti pour s'assurer de l'efficacité énergétique de votre récupérateur aréothermique.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Quel est la différence entre un récupérateur aéorothermique et un thermopompe?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Le récupérateur aéorothermique, tout comme le thermopompe, est un dispositif permettant de transférer de l'énergie thermique d'un millieu à basse température vers un millieu à haute température à l'exception près que le récupérateur fonctionne avec un gaz (puron) qui lui permet de fonctionner beaucoup plus efficacement à de très basses températures.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Êtes-vous des installateurs RGE ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Oui nous sommes bien certifié RGE, La certification RGE signifie « Reconnu Garant de l'Environnement » et garantie la conformité des travaux aux normes de rénovation et leur éligibilité aux subventions.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  )
}

export default About