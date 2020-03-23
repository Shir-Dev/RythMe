import React from "react";
import "./assets/styles/footer.css";
import home from "./assets/img/home.png";
importgit  configuraacion from "./assets/img/configuraacion.png";

function Footer() {
  return (
    <div className="container">
      <footer className="b-footer">
        <img src={configuraacion} className="configuracion"></img>
        <nav>
          <li className="config">
            <a href="Form.js">configuracion</a>
          </li>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
