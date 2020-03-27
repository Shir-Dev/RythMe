import React from "react";

import Footer from "./Footer";
import Header from "./Header";

function Conciertos() {
  return (
    <div className="contenedor_g">
      <Header />

      <Footer changeNav="conciertos" />
    </div>
  );
}

export default Conciertos;
