import * as React from 'react';
import Typography from '@mui/material/Typography';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

export default function PaymentForm() {
    const [logement, setLogement] = React.useState('maison')
    const [status, setStatus] = React.useState('proprietaire')

    const handleChange = (e) => {
        setLogement(e.target.value)
    }

    const handleChangeStatus = (e) => {
        setStatus(e.target.value)
    }
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Type d'habitation
            </Typography>
            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">Votre Statut</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={status}
                    onChange={handleChangeStatus}
                >
                    <FormControlLabel value="proprietaire" control={<Radio />} label="Proprietaire" />
                    <FormControlLabel value="locataire" control={<Radio />} label="Locataire" />
                </RadioGroup>
                <FormLabel id="demo-controlled-radio-buttons-group">Type de logement</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={logement}
                    onChange={handleChange}
                >
                    <FormControlLabel value="maison" control={<Radio />} label="Maison" sx={{ flexGrow: 1, flexDirection: 'row-reverse', border: '1px solid', borderRadius: '8px' }}
              />
                    <FormControlLabel value="appartement" control={<Radio />} label="Appartement" />
                </RadioGroup>
            </FormControl>
        </React.Fragment>
    );
}