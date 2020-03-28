import React from "react";
import Form from "./Form";

function Registro(props) {
  let formObject;
  function takingData(data) {
    formObject = data;
    console.log(formObject);
  }
  let register = <Form sendingData={takingData}></Form>;

  return register;
}

export default Registro;
