import React from "react";
import "./assets/styles/footer.css";
import entradas from "./assets/icons/entradas.png";
import lupa1 from "./assets/icons/lupa1.png";
import star from "./assets/icons/star.png";
import campana from "./assets/icons/campana.png";
import config from "./assets/icons/config.png";

function Footer() {
  return (
    <div className="container">
      <footer className="b-footer">
        <img src={entradas} className="b-footer"></img>
        <img src={lupa1} className="b-footer"></img>
        <img src={star} className="b-footer"></img>
        <img src={campana} className="b-footer"></img>
        <img src={config} className="b-footer"></img>
        <div class="letras">
          <p class="entradas">Entradas</p>
          <p class="buscar">Buscar</p>
          <p class="home">Home</p>
          <p class="notif">Notificaciones</p>
          <p class="config">Configuración</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
