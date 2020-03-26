import React from "react";
import logom from "./assets/icons/avatar.png";
import logop from "./assets/icons/comentario.png";
import logos from "./assets/icons/usuario.png";
import "./assets/styles/bienvenido.css";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";

function Bienvenido() {
  return (
    <div className="contenedor">
      <Header />
      <header className="">
        <p className="parrafo">¡Bienvenido!</p>
      </header>
      <div className="c__img">
        <img src={logop} className="logo_p " />
        <img src={logom} className="logo_g" />
        <img src={logos} className="logo_p" />
      </div>
      <nav className="c__nav">
        <a href="">Perfil</a>
      </nav>
      <footer>
        <Footer changeNav="buscar" />
      </footer>
    </div>
  );
}

export default Bienvenido;
