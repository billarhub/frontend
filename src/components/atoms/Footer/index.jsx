import Image from 'next/image'
import React from 'react'
import Logo from '../Logo'

const Footer = () => {
  return (
    <footer className='c-footer'>
        <div className='c-footer__content'>
         <div className='c-footer__logo'>
         <Logo white />
        <h4>© 2022 Copyright. Todos los derechos reservados.</h4>
         </div>
        </div>
      </footer> 
  )
}

export default Footer