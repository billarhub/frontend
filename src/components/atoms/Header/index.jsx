import Link from "next/link";
import React from "react";
import Button from "../Button";
import Logo from "../Logo";

const Header = () => {
  return (
    <header className="c-header">
      <div className="c-header__content">
        <Logo />
      </div>
      <ul className="c-header__options">
        <Link href="/tournament" ><a className="c-header__option" >Torneos</a></Link>
        <Link href="#" ><a className="c-header__option" >Jugador</a></Link>
        <Link href="#" ><a className="c-header__option" >Club</a></Link>

        {/* <Link href="#" className="c-header__option"></Link>
        <Link href="#" className="c-header__optin" >Jugador</Link> */}

      </ul>
      <nav className="c-header__nav">
        <Link href="login" ><a className="c-header__login">Ingresar</a></Link>
        <Link href="register">
          <Button>Registrarse</Button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
