import { Typography } from '@mui/material'
import React from 'react'

function Aide({title, img, text}) {
  return (
    <div className='aide'>
        <Typography variant='h5' color='primary'>{title}</Typography>
        <div style={{display: 'flex', flexWrap: 'wrap', alignContent: 'space-around'}}>
            <img src={img} alt="" />
            <div style={{maxWidth: '500px', margin: 'auto'}} >{text}</div>
        </div>
    </div>
  )
}

export default Aide