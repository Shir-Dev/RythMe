import React from 'react';
import logog from './assets/icons/conversationMinor.png';
import logom from './assets/icons/profileMajorMonotone.png';
import logop from './assets/icons/group.png';


function Bienvenido() {
  return (
    <div className="">
      <header className="">
      <p className="parrafo">¡Bienvenido!</p>
      </header>
      <div className="c__img">
          <img src={logog} className="logo_g"/>
          <img src={logom} className="logo_p"/>
          <img src={logop} className="logo_p"/>

      </div>""
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
