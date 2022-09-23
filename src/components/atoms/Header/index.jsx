import React from 'react'
import Logo from '../Logo';

const Header = () => {
  return (
    <header className='c-header'>
      <div className='c-header__content'>
        <Logo/>
      </div>

      <nav className='c-header__nav'>
        <ul>
          <li>Ingresar</li>
          <li>Registrarse</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;