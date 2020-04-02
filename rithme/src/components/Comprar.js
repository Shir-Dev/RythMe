import React, { useState } from "react";
import Carrito from "./Carrito";
import Entradas from "./Entradas";

function Comprar() {
  const [registerForm, setRegisterForm] = useState(
    <Carrito takingData={takingData}></Carrito>
  );
  let allMusic;
  function takingData(data) {
    allMusic = data;
    setRegisterForm(<Entradas allMusic={allMusic}></Entradas>);
  }

  return registerForm;
}

export default Comprar;
