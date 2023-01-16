import Cookies from "js-cookie";
import Link from "next/link";
import Router, { useRouter }  from "next/router";
import React, { useContext} from "react";
import AuthContext from "../../../context/authContext";

import Button from "../Button";
import Logo from "../Logo";

const Header = () => {
  const {  logout  } = useContext(AuthContext);
  const router = useRouter()

  const handleLogout = () => {
    logout();   
    router.push('/')
  };

  const cookie = Cookies.get('auth')
  return (
    <header className="c-header">
      <div className="c-header__content">
        <Logo />
      </div>
      {cookie? (
      
        <>
          <ul className="c-header__options">
            <Link href="/tournament">
              <a className="c-header__option">Torneos</a>
            </Link>
            <Link href="#">
              <a className="c-header__option">Jugador</a>
            </Link>
            <Link href="#">
              <a className="c-header__option">Club</a>
            </Link>
          </ul>
          <div className="c-header__nav">
            <Button onClick={handleLogout}>Cerrar Sesión</Button>
          </div>
        </>
      ) : (
        <nav className="c-header__nav">
          <Link href="/login">
            <a className="c-header__login">Ingresar</a>
          </Link>
          <Link href="register">
            <Button>Registrarse</Button>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
