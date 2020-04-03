import React from "react";
import "./assets/styles/header.css";
import flecha11 from "./assets/icons/flecha11.png";

function App(props) {
  let headerText = " ";
  let srcArrow = "";
  let isArrow = "";

  isArrow = props.headerObject.isArrow;
  headerText = props.headerObject.headerText;
  srcArrow = props.headerObject.srcArrow;

  let arrow = "";
  if (isArrow === true) {
    arrow = (
      <a href={srcArrow}>
        <img src={flecha11}></img>
      </a>
    );
  }

  return (
    <div className="contenedor_header">
      <header className="b-header">
        <div className="b-flecha">{arrow}</div>
        <div className="text">{headerText}</div>
      </header>
    </div>
  );
}

export default App;
