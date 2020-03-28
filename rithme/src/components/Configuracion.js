import React from "react";

import Footer from "./Footer";
import Header from "./Header";

function Configuracion() {
  const formHeader = {
    headerText: "Configuración",
    srcArrow: "/bienvenido"
  };
  return (
    <div className="contenedor_g">
      <Header headerObject={formHeader} />

      <Footer changeNav="confi" />
    </div>
  );
}

export default Configuracion;
