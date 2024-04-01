import { Container, Grid, Typography } from '@mui/material'
import { Stack } from '@mui/material'
import React from 'react'
import { MailOutline, CallOutlined, PlaceOutlined } from '@mui/icons-material'

function ContactInfos() {
    return (
        <Container maxWidth='xs'>
            <Stack spacing={3}>
                <div variant='h6'>
                    <Typography display='inline' color='primary' fontWeight='bold'>Solvia Energie</Typography>, a votre service
                </div>
                <Typography variant='h4'>
                    NOUS CONTACTER
                </Typography>
                <Grid container alignItems='center' >
                    
                    <CallOutlined sx={{ fontSize: 50 }} />
                    <div>
                        Téléphone <Typography display='inline' color='primary' fontWeight='bold'> 09 70 68 43 43 </Typography><br />
                        Lundi au Jeudi 08h-20h <br />
                        Vendredi 08h-14h
                    </div>
                </Grid>
                <Grid container alignItems='center'>
                    <MailOutline sx={{ fontSize: 50 }} />
                    <div>
                        E-MAIL <Typography display='inline' color='primary' fontWeight='bold'> contact@solviaenergie.fr </Typography> <br />
                        Service Après-vente
                    </div>
                </Grid>
                <Grid container alignItems='center' wrap='nowrap'>
                    <PlaceOutlined sx={{ fontSize: 50 }} />
                    <div>
                        Adresse, Siège <br />
                        <Typography color='primary' fontWeight='bold'> 10 Avenue du bac 94210 LA VARENNE SAINT HILAIRE </Typography>
                    </div>
                </Grid>
            </Stack>
        </Container>
    )
}

export default ContactInfos