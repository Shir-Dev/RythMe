import React from "react";
import "./assets/styles/buscar.css";
import Footer from "./Footer";
import Header from "./Header";

function Buscar() {
  return (
    <div className="contenedor_g">
      <Header />

      <Footer changeNav="buscar" />
    </div>
  );
}

export default Buscar;
