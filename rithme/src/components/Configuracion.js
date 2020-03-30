import React from "react";
import "./assets/styles/configuracion.css";
import Footer from "./Footer";
import Header from "./Header";

function Configuracion() {
  const formHeader = {
    headerText: "Configuración",
    srcArrow: "/bienvenido"
  };
  return (
    <div className="contenedor">
      <Header headerObject={formHeader} />

      <Footer changeNav="confi" />
    </div>
  );
}

export default Configuracion;
