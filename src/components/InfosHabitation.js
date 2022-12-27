import * as React from 'react';
import Typography from '@mui/material/Typography';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

export default function PaymentForm() {
    const [user, setUser] = React.useState(JSON.parse(localStorage.getItem('user')))
    const updateUser = (user) => {
        localStorage.setItem('user', JSON.stringify(user))
    }

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
        console.log(e)
    }

    const handleChangeStatus = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
        console.log(e)
    }

    React.useEffect(() => {
        updateUser(user)
    }, [handleChange, handleChangeStatus])
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Type d'habitation
            </Typography>
            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">Votre Statut</FormLabel>
                <RadioGroup
                    id="statut"
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="statut"
                    defaultValue='proprietaire'
                    onChange={handleChangeStatus}
                >
                    <FormControlLabel id='statut' value="proprietaire" control={<Radio />} label="Proprietaire" />
                    <FormControlLabel id='statut' value="locataire" control={<Radio />} label="Locataire" />
                </RadioGroup>
                <FormLabel id="demo-controlled-radio-buttons-group">Type de logement</FormLabel>
                <RadioGroup
                    id='logement'
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="logement"
                    defaultValue='maison'
                    onChange={handleChange}
                >
                    <FormControlLabel value="maison" control={<Radio />} label="Maison" />
                    <FormControlLabel value="appartement" control={<Radio />} label="Appartement" />
                </RadioGroup>
            </FormControl>
        </React.Fragment>
    );
}