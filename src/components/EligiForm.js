import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InfosPerso from './InfosPerso';
import InfosHabitation from './InfosHabitation';
import InfosChauffage from './InfosChauffage';
import emailjs from '@emailjs/browser';


const steps = ['Situation personnelle', "Type d'habitation", 'Mode de vie'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <InfosPerso />;
    case 1:
      return <InfosHabitation />;
    case 2:
      return <InfosChauffage />;
    default:
      throw new Error('Unknown step');
  }
}

const sendEmail = () => {
  let templateParams = JSON.parse(localStorage.getItem('user'))
  emailjs.send('service_0b8ior8', 'template_xharss9', templateParams, 'mEYfRDD7YhHd42iLG')
    .then(function (response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function (error) {
      console.log('FAILED...', error);
    });
}


export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    let required_fields = ['lastName', 'email', 'tel']
    let validInputs = true
    if (activeStep == 0) {
      for (let field of required_fields) {
        let inp = document.getElementById(field)
        if (inp.checkValidity() == false) {
          inp.classList.add('noValid')
          validInputs = false
        }
        else {
          inp.classList.remove('noValid')
        }
      }
    }
    console.log(validInputs)
    console.log(activeStep)
    if(validInputs){
      setActiveStep(activeStep + 1)
    }

    if (activeStep + 1 === steps.length) {
      sendEmail()
    }

  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper elevation={3} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Typography variant='h4' id='form'>Formulaire d'éligibilité aux aides et subventions 2023</Typography>
        <Typography variant='subtitle1'>Remplissez le formulaire ci dessous et testez votre éligibilité aux aides de l'État pour votre projet</Typography>
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography variant="h5" gutterBottom>
              Merci pour votre envoie !
            </Typography>
            <Typography variant="subtitle1">
              Un conseiller spécialisé vous contactera très prochainement.
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {getStepContent(activeStep)}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                  Retour
                </Button>
              )}

              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 3, ml: 1 }}
              >
                {activeStep === steps.length - 1 ? 'Envoyer' : 'Suivant'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Paper>
    </Container>
  );
}