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
