import React from "react";
import "./assets/styles/header.css";
import flecha11 from "./assets/icons/flecha11.png";
import { Link } from "react-router-dom";

function App(props) {
  //const isArrow = props.headerObject.isArrow;
  const headerText = props.headerObject.headerText;
  const srcArrow = props.headerObject.srcArrow;

  let arrow = "";
  /*if (isArrow === true) {
    arrow = (
      <Link to={srcArrow}>
        <img src={flecha11} className="b-flecha"></img>
      </Link>
    );
  }*/

  return (
    <div className="contenedor_header">
      <header className="b-header">
        {arrow}
        <div className="text">{headerText}</div>
      </header>
    </div>
  );
}

export default App;
