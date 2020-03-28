import React from "react";

import Footer from "./Footer";
import Header from "./Header";

function Conciertos() {
  const formHeader = {
    headerText: "Conciertos",
    srcArrow: "/bienvenido"
  };
  return (
    <div className="contenedor_g">
      <Header headerObject={formHeader} />

      <Footer changeNav="conciertos" />
    </div>
  );
}

export default Conciertos;
