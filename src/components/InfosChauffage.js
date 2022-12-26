import * as React from 'react';
import Typography from '@mui/material/Typography';
import { FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from '@mui/material';


export default function Review() {
  const [user, setUser] = React.useState(JSON.parse(localStorage.getItem('user')))
  const updateUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
  }

  const handleChangeMode = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleChangeSolution = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  React.useEffect(() => {
    updateUser(user)
  }, [handleChangeMode, handleChangeSolution])

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Mode de chauffage
      </Typography>
      <FormControl fullWidth>
        <FormLabel id="demo-controlled-radio-buttons-group">Votre mode de chauffage actuel ?</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="chauffage"
          value={user.chauffage ?? ''}
          onChange={handleChangeMode}
        >
          <FormControlLabel value="fioul" control={<Radio />} label="Fioul" />
          <FormControlLabel value="gaz" control={<Radio />} label="Gaz" />
          <FormControlLabel value="electrique" control={<Radio />} label="Eléctrique" />
        </RadioGroup>
        <br/>
        <FormLabel id="demo-controlled-radio-buttons-group">Type de solution souhaité ?</FormLabel>
        <br/>
        <FormControl>
          <InputLabel id="demo-controlled-radio-buttons-group">Solution</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={user.solution ?? ''}
            label="Solution"
            name="solution"
            onChange={handleChangeSolution}
          >
            <MenuItem value="calorifugeage">Calorifugeage</MenuItem>
            <MenuItem value="pac air air">Pompe à chaleur air/air</MenuItem>
            <MenuItem value="pac air eau">Pompe à chaleur air/eau</MenuItem>
            <MenuItem value="iso exterieure">Isolation extérieure</MenuItem>
          </Select>
        </FormControl>
      </FormControl>
    </React.Fragment>
  );
}