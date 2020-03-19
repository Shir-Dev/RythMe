import React from "react";
import "./assets/styles/footer.css";
import ticket1 from "./assets/icons/ticket1.png";
import lupa1 from "./assets/icons/lupa1.png";
import star from "./assets/icons/star.png";
import campana from "./assets/icons/campana.png";
import config from "./assets/icons/config.png";

function Footer() {
  return (
    <div className="container">
      <footer className="b-footer">
        <picture class="iconos">
          <img src={ticket1} className="ticket"></img>
          <img src={lupa1} className="lupa"></img>
          <img src={star} className="star"></img>
          <img src={campana} className="campana"></img>
          <img src={config} className="config"></img>
        </picture>

        <div class="letras">
          <p class="entradas">Entradas</p>
          <p class="buscar">Buscar</p>
          <p class="home">Home</p>
          <p class="notif">Notificaciones</p>
          <p class="configu">Configuración</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
