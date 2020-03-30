import React, { useState } from "react";
import Form from "./Form";
import FormMusical from "./FormMusical";
import { Redirect } from "react-router-dom";

function withAuth() {
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

export default withAuth;
