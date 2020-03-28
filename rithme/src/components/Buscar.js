import React from "react";
import "./assets/styles/buscar.css";
import Footer from "./Footer";
import Header from "./Header";

function Buscar() {
  const formHeader = {
    headerText: "Búsqueda",
    srcArrow: "/bienvenido"
  };
  return (
    <div className="contenedor_g">
      <Header headerObject={formHeader} />

      <Footer changeNav="buscar" />
    </div>
  );
}

export default Buscar;
