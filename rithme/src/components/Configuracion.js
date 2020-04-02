import React from "react";
import "./assets/styles/configuracion.css";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import logoConf22 from "./assets/icons/logoConf22.png";
import logoConfi33 from "./assets/icons/logoConfi33.png";

function Configuracion(props) {
  const formHeader = {
    headerText: "Configuración"
  };
  return (
    <div className="contenedor">
      <Header headerObject={formHeader} />
      <div className="user1">
        <h2>¡Hola! {props.user.username}</h2>
      </div>
      <div className="f-config">
        <div className="contenedor_confi">
          <div>
            <Link to="/confi" className="confi_perfil">
              Configura tu perfil
            </Link>
          </div>
          <div className="logoConf">
            <img src={logoConfi33} />
          </div>
        </div>
        <div className="contenedor_confi2">
          <div>
            <Link to="/sincro" className="confi_perfil">
              Sincroniza tu música y plataformas
            </Link>
          </div>
          <div className="logoConf">
            <img src={logoConf22} />
          </div>
        </div>
      </div>
      <Footer changeNav="confi" />
    </div>
  );
}

export default Configuracion;
