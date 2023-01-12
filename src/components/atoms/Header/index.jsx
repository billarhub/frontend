import Link from "next/link";
import React, { useContext } from "react";
import AuthContext from "../../../context/authContext";
import Button from "../Button";
import Logo from "../Logo";

const Header = () => {
  const { authReady, logout , user} = useContext(AuthContext);
  console.log(user);
  const handleLogout = () => {
    logout();
  };
  return (
    <header className="c-header">
      <div className="c-header__content">
        <Logo />
      </div>
      {authReady ? (
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
          <nav className="c-header__nav">
            <Button onClick={handleLogout}>Cerrar Sesión</Button>
          </nav>
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
