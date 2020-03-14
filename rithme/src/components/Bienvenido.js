import React from 'react';
import logom from './assets/icons/avatar.png';
import logop from './assets/icons/comentario.png';
import logos from './assets/icons/usuario.png';
import './assets/styles/bienvenido.css';
import Header from './Header'



function Bienvenido() {
  return (
    <div className="contenedor">
      <Header/>
      <header className="">
      <p className="parrafo">¡Bienvenido!</p>
      </header>
      <div className="c__img">
          <img src={logop} className="logo_p "/>
          <img src={logom} className="logo_g"/>
          <img src={logos} className="logo_p"/>

      </div>
      <nav className="c__nav">
      <a href="">Pefil</a>
      <a href="">Fan Store</a>
      <a href="">Tours & Tickets</a>
      <a href="">Fan Wall</a>
      <a href="">Amigos y mensajes</a>
      </nav>
    </div>
  );
}

export default Bienvenido;
