import React, { useState } from "react";
import Carrito from "./Carrito";
import Entradas from "./Entradas";


function Comprar(props) {
  const [registerForm, setRegisterForm] = useState(
    <Carrito takingData={takingData}></Carrito>
  );
  let allMusic;
  console.log(props.urlToGet);
  function takingData(data) {
    allMusic = data;
    setRegisterForm(
      <Entradas allMusic={allMusic} user={props.user}></Entradas>
    );
  }

  return registerForm;
}

export default Comprar;
