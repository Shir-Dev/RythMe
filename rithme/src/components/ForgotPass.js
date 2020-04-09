import React, { useState } from "react";
import Header from "./Header";
import "./assets/styles/forgotPass.css";
import { Link } from "react-router-dom";

function ForgotPass(props) {
  const [ForgotObject, setFogotObject] = useState();

  const formHeader = {
    isArrow: true,
    headerText: "Recuperar contraseña",
    srcArrow: "/login",
  };

  return (
    <>
      <Header headerObject={formHeader} />
      <form>
        <div className="contenedor_forgot-inner">
          <label className="emailForgot">Dirección email:</label>

          <input
            className="correo2"
            type="email"
            placeholder="Correo Electrónico"
            name="email"
            id="email"
          />

          <input
            className="btnSend"
            type="button"
            value="Enviar"
            name="continue"
            id="continue"
            //onClick={autoLogin}
          />
        </div>
      </form>
    </>
  );
}

export default ForgotPass;
