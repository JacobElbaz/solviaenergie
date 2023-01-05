import { Button, Container, Typography } from '@mui/material'
import React from 'react'
import video from '../assets/videos/calorifugeage.mp4'

function Calorifugeage() {
  return (
    <Container>
      <Typography variant='h3' color='primary' fontWeight='bold' textAlign='center' className='my-5'>Calorifugeage</Typography>
      <div style={{textAlign: 'center'}}><video src={video} controls loop autoPlay muted></video></div>
      <Typography variant='h4' component='h5' color='primary'>Qu'est-ce que le calorifugeage ?</Typography>
      <Typography>Le calorifugeage thermique désigne l'isolation des tuyaux ainsi que des canalisations d'eau et de chauffage. Il concerne également les citernes, les réservoirs ou encore les chaudières dans lesquels circulent des fluides caloporteurs ou de l'eau. Lorsque ces installations sont placées dans des pièces non chauffées, comme un garage, un sous-sol ou une cave, la déperdition de chaleur est élevée.</Typography>
      <Typography variant='h5' color='primary'>L'efficacité du calorifugeage</Typography>
      <Typography>Sans calorifugeage, les canalisations qui traversent la maison peuvent induire une perte calorifique importante. Ceci oblige à augmenter la température de l'installation, ce qui fait grimper la facture d'électricité ou de gaz. Une fois effectué, le calorifugeage permet de réduire considérablement les déperditions énergétiques et donc de faire des économies sur vos différents postes de dépenses.</Typography>
      <Typography>Faciles à installer, les manchons isolants dédiés au calorifugeage prouvent immédiatement leur efficacité. L'eau qui circule dans les canalisations, qu'elle soit froide ou chaude, conserve sa température initiale tout au long du circuit de chauffage ou d'eau chaude.</Typography>
      <Typography>Même lorsque les températures sont très basses, les canalisations placées dans une pièce non chauffée ne craignent pas le gel grâce au calorifugeage. Ainsi, l'eau qui circule est protégée du froid, tout comme votre équipement.</Typography>
      <Typography>Pour être efficace, le calorifugeage doit être réalisé avec tube d'isolant épais. Plus l'épaisseur est élevée, plus les canalisations seront protégées. Les manchons de calorifugeage doivent s'adapter au diamètre de la tuyauterie. Pour montrer leur efficacité, ils ne doivent pas être trop grands ni trop petits.</Typography>
      <Typography>Dans les cas où le réseau de canalisation est étendu (maison d'une surface habitable élevée), il est important d'isoler les tuyaux pour minimiser les pertes calorifiques durant le transport. Ainsi, l'eau chaude acheminée depuis la chaudière ou le ballon d'eau chaude conserve sa température jusqu'aux radiateurs à eau chaude et aux robinets.</Typography>
      <Typography>Une fois le colmatage des fuites de chaleur effectué, l'eau chaude reste chaude et l'eau froide ne sort pas glaciale du robinet. Tout ceci offre un confort thermique appréciable, tout en limitant les pertes de chaleur. </Typography>
      <Typography variant='h5' color='primary'>Le bilan énergétique, indispensable pour faire le point</Typography>
      <Typography>Pour toute l'isolation de votre logement, nous vous suggérons de réaliser un bilan énergétique. Cela est indispensable pour faire le point sur les performances énergétiques de votre habitation, qu'elle soit récente ou ancienne. Vous pourrez ainsi connaître les économies que vous pourriez envisager pour votre maison ou appartement grâce à des travaux d'isolation et de rénovation. Le questionnaire, réalisé en quelques minutes, vous permettra d'entrer toutes les informations relatives à votre habitation et d'obtenir un résultat immédiat.</Typography>
      <Typography>Une fois les résultats obtenus, vous aurez toutes les indications nécessaires pour faire des travaux d'isolation dans votre logement. Toit, murs, ouvertures vitrées... tout est détaillé. Vous pourrez aussi prendre en compte les différentes offres d'électricité et de gaz Total Direct Energie, afin de faire des économies sur vos factures et de réduire toutes vos dépenses.</Typography>
      <Typography>Vous savez désormais tout ce qu'il faut savoir sur le calorifugeage et pourquoi il est important d'isoler l'ensemble de vos canalisations. </Typography>
      <div style={{ width: '100%', textAlign: 'center', marginTop: '50px' }}>
        <Button size='large' variant='contained' onClick={() => { window.location = '/#form' }}>Je teste mon éligibilité</Button>
      </div>
    </Container>
  )
}

export default Calorifugeage