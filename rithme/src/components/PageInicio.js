import React from 'react';
import logo_g from './assets/img/RITHME_OK-2_CLARO.png';
import './assets/styles/page-inicio.css';



function PageInicio() {
  return (
    <div className="pageInicio">
      <div className="contenedor_logo">
    <img src={logo_g} className="logo_grande"/>
    </div>
    </div>

  );
}

export default PageInicio;
