import React, { useState, useEffect } from "react";
import logo_g from "./assets/img/RITHME_OK-2_CLARO.png";
import "./assets/styles/page-inicio.css";
import { Redirect } from "react-router-dom";

function PageInicio() {
  const [redirect, setRedirect] = useState(false);

  setTimeout(redirecting, 2500);

  function redirecting() {
    setRedirect("/bienvenido");
  }

  return (
    <div className="pageInicio">
      <div className="contenedor_logo">
        <img src={logo_g} className="logo_grande" />
      </div>
      <Redirect to={redirect} />
    </div>
  );
}

export default PageInicio;
