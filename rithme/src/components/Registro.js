import React, { useState, useEffect } from "react";
import Form from "./Form";
import FormMusical from "./FormMusical";

function Registro() {
  const [registerForm, setRegisterForm] = useState(
    <Form takingData={takingData} hola="aslkjdf"></Form>
  );
  let formObject;
  function takingData(data) {
    formObject = data;
    console.log(formObject);
    setRegisterForm(<FormMusical formObject={formObject}></FormMusical>);
  }

  return registerForm;
}

export default Registro;
