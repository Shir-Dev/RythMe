import React from "react";
import "./assets/styles/header.css";
import flecha from "./assets/icons/flecha.png";

function App() {
  return (
    <div className="contenedor_header">
      <header className="b-header">
        <img src={flecha} className="b-flecha"></img>
      </header>
    </div>
  );
}

export default App;
