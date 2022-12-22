import React from 'react'
import domofinance from '../assets/domofinance.png'
import rge from '../assets/rge.png'
import qualibat from '../assets/qualibat.avif'
import garantie from '../assets/garantie.png'
import smabtp from '../assets/smabtp.png'
import './Partenaires.css'

function Partenaires() {
  return (
    <div className='partenaires'>
      <h1>Ils nous font confiance</h1>
      <div>
        <img src={domofinance} alt="" />
        <img src={qualibat} alt="" />
        <img src={rge} alt="" />
        <img src={garantie} alt="" />
        <img src={smabtp} alt="" />
      </div>
    </div>
  )
}

export default Partenaires