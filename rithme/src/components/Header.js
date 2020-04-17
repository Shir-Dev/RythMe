import React, { useState } from "react";
import "./assets/styles/header.css";
import flecha11 from "./assets/icons/flecha11.png";
import ComprarCarrito from "./ComprarCarrito";

function App(props) {
  let headerText = " ";
  let srcArrow = "";
  let isArrow = "";

  isArrow = props.headerObject.isArrow;
  headerText = props.headerObject.headerText;
  srcArrow = props.headerObject.srcArrow;
  const [carrito, setCarrito] = useState(<ComprarCarrito></ComprarCarrito>);
  const [boolean, setBoolean] = useState(true);
  let arrow = "";
  if (isArrow === true) {
    arrow = (
      <a href={srcArrow}>
        <img src={flecha11}></img>
      </a>
    );
  }

  if (
    (headerText === "Login" ||
      headerText === "Registro" ||
      headerText === "Restablecer contraseña" ||
      headerText === "Recuperar contraseña") &&
    boolean
  ) {
    setCarrito("");
    setBoolean(false);
  }
  return (
    <div className="contenedor_header">
      <header className="b-header">
        <div className="b-flecha">{arrow}</div>

        <div className="text">{headerText}</div>
        {carrito}
      </header>
    </div>
  );
}

export default App;
