import React from 'react'
import ContactForm from './ContactForm'
import ContactInfos from './ContactInfos'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
      <h1>Vous avez des questions ?</h1>
      <div className='footer'>
        <ContactInfos />
        <ContactForm />
      </div>
    </div>
  )
}

export default Footer