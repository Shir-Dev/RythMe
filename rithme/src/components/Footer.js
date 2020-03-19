import React from "react";
import "./assets/styles/footer.css";
import home from "./assets/img/home.png";
import configuraacion from "./assets/img/configuraacion.png";

function Footer() {
  return (
    <div className="container">
      <footer className="b-footer">
        <img src={configuraacion} className="configuracion"></img>

        <img src={home} className="configuracion"></img>
      </footer>
    </div>
  );
}

export default Footer;
