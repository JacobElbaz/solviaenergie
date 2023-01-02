import { Button, Typography } from '@mui/material'
import { Container } from '@mui/material'
import React from 'react'
import Aide from '../components/Aide'
import maprimerenov from '../assets/maprimerenov.webp'
import agence from '../assets/agence nationale.webp'
import eco from '../assets/eco pret.webp'
import coup from '../assets/coup de pouce.webp'
import cee from '../assets/cee.webp'
import tva from '../assets/tva.webp'
import exo from '../assets/exoneration.webp'

function Aides() {
  return (
    <Container>
      <Typography variant='h3' color='primary' fontWeight='bold' textAlign='center' marginTop='70px'>Aides et subventions 2022</Typography>
      <Typography variant='h4' color='secondary' textAlign='center' marginY='50px'>Rénovation énergétique : les aides auxquelles vous pouvez prétendre</Typography>
      <Aide title="MaPrimeRenov'" img={maprimerenov} text={<Typography>Lancée le 1er janvier 2020, MaPrimeRénov' remplace le crédit d'impôt pour la transition énergétique (CITE) et les aides de l'Agence nationale de l'Habitat (Anah) « Habiter mieux agilité ». Dans le cadre du Plan de relance de l'économie, le dispositif a été renforcé depuis le 1er octobre 2020.<br /> MaPrimeRénov' est désormais accessible à tous les propriétaires et à toutes les copropriétés.</Typography>} />
      <Aide title="Aide « Habiter mieux sérénité » de l'Agence nationale de l'habitat (Anah)" img={agence} text={<Typography>« Habiter mieux sérénité » est une aide versée par l'Anah à certains ménages pour les aider dans les travaux de rénovation de leurs logements. Le financement est proportionnel au montant des travaux. Le montant total de l'aide ne pas excéder 18 000 €.<br />L'aide est accordée aux ménages aux ressources modestes et très modestes, propriétaires occupant un logement individuel. Les propriétaires bailleurs et syndicats de copropriétaires sont également éligibles.<br />Pour les logements occupés à titre de résidence principale et qui ont plus de 15 ans à la date où le dossier est déposé.</Typography>} />
      <Aide title="Éco-prêt à taux zéro" img={eco} text={<Typography>L'éco-prêt à taux zéro vous permet de financer la rénovation énergétique de votre logement sans faire d'avance de trésorerie et sans payer d'intérêts. Le dispositif est prorogé jusqu'au 31 décembre 2021.<br />
        Le logement doit être :
        <li>déclaré comme résidence principale</li>
        <li>une maison ou un appartement</li>
        <li>achevé avant le 1er janvier 1990.</li>
        Un seul éco-prêt à taux zéro peut être accordé par logement (sauf recours à un éco-prêt à taux zéro complémentaire, sans que le montant global des deux emprunts n'excède 30 000 €).</Typography>} />
      <Aide title="Le dispositif Coup de pouce économies d'énergie" img={coup} text={<Typography>Le dispositif « Coup de pouce économies d'énergie » est ouvert jusqu'au 31 décembre 2021. L'objectif de ce dispositif est permettre aux ménages en situation de précarité énergétique de bénéficier d'aides plus importantes.<br />Depuis 2019, tous les ménages peuvent en bénéficier.<br />
        Le dispositif se décline en 2 aides :
        <li>la prime Coup de pouce chauffage</li>
        <li>la prime Coup de pouce isolation.</li>
        Le montant des primes dépend du niveau de ressources des ménages. Les primes sont versées par les entreprises signataires de la Charte « Coup de pouce économies d'énergie ». Il s'agit principalement des vendeurs d'énergie.</Typography>} />
      <Aide title="Aides des entreprises de fourniture d'énergie (CEE)" img={cee} text={<Typography>Dans le cadre des Certificats d'Économies d'Energie (CEE), les entreprises de fourniture d'énergie (EDF, Engie, Total…) proposent des aides pour la réalisation de travaux d'économies d'énergie sous réserve qu'ils soient effectués par un professionnel reconnu garant de l'environnement (RGE).<br />En contrepartie des aides versées, les entreprises CEE obtiennent des certificats leur permettant d'attester auprès de l'État qu'elles ont bien rempli leur obligation d'inciter les consommateurs à réaliser des économies d'énergie.</Typography>} />
      <Aide title="TVA à 5,5 % pour les travaux d'amélioration de la qualité énergétique" img={tva} text={<Typography>Si vous rénovez votre logement, certains travaux peuvent bénéficier d'une TVA à taux réduit à 5,5 %.
        <li>les propriétaires occupants, bailleurs ou syndicats de propriétaires</li>
        <li>les locataires et occupants à titre gratuit</li>
        <li>les sociétés civiles immobilières.</li>
        Le logement doit être achevé depuis plus de 2 ans. Maison ou appartement, il peut être occupé à titre de résidence principale ou secondaire.</Typography>} />
      <Aide title="Exonération de la taxe foncière pour les travaux d'économies d'énergie" img={exo} text={<Typography>Certaines collectivités (communes, départements…) exonèrent temporairement de taxe foncière les foyers qui réalisent des travaux d'économie d'énergie. L'exonération peut être totale ou partielle.<br />Cette exonération peut être demandée par les propriétaires de logements, occupants ou bailleurs, réalisant des travaux d'économie d'énergie.<br />
        Les logements éligibles sont ceux :
        <li>achevés avant le 1er janvier 1989 (article 1383-0 B du CGI)</li>
        <li>achevés avant le 1er janvier 2009 dont le niveau de performance énergétique est supérieur à celui qu'impose la législation (article 1383-0 B bis du CGI).</li></Typography>} />
      <div style={{width: '100%', textAlign: 'center', marginTop: '50px'}}>
      <Button size='large' variant='contained' onClick={()=>{window.location = '/#form'}}>Je teste mon éligibilité</Button>
      </div>
    </Container>
  )
}

export default Aides