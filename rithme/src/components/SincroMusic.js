import React from "react";
import "./assets/styles/configuracion.css";
import Footer from "./Footer";
import Header from "./Header";
import youtube from "./assets/img/youtube.png";
import amazon from "./assets/img/amazon.png";
import apple from "./assets/img/apple.png";
import googleplay from "./assets/img/googleplay.png";
import soundcloud from "./assets/img/soundcloud.png";
import spotify from "./assets/img/spotify.png";
function SincroMusic() {
  const formHeader = {
    isArrow: true,
    headerText: "Configuración",
    srcArrow: "/configuracion"
  };
  return (
    <div className="contenedor">
      <Header headerObject={formHeader} />
      <h2 className="parrafo2">Sincroniza tu Música y Plataformas</h2>
      <div className="contenedor_sincro">
        <button>
          <img src={youtube} />
        </button>
        <button>
          <img src={spotify} />
        </button>
        <button>
          <img src={apple} />
        </button>
        <button>
          <img src={googleplay} />
        </button>
        <button>
          <img src={soundcloud} />
        </button>
        <button>
          <img src={amazon} />
        </button>
      </div>
      <Footer changeNav="confi" />
    </div>
  );
}

export default SincroMusic;
