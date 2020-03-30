import React from "react";
import "./assets/styles/configuracion.css";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";

function Configuracion() {
  const formHeader = {
    headerText: "Configuración",
    srcArrow: "/bienvenido"
  };
  return (
    <div className="contenedor">
      <Header headerObject={formHeader} />
      <div className="contenedor_confi">
        
     <Link to="/confi" className="confi_perfil">
          Configuracion de Perfil
        </Link>
      
        </div>
      <Footer changeNav="confi" />
    </div>
  );
}

export default Configuracion;
