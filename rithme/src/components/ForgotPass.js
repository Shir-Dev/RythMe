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
    <div className="container-pass">
      <Header headerObject={formHeader} />
      <form className="contenedor_forgot">
        <div>
          <label className="emailForgot">Dirección email:</label>
        </div>
        <input
          className="correo2"
          type="email"
          placeholder="Correo Electrónico"
          name="email"
          id="email"
        />
        <div className="forgotButton">
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
    </div>
  );
}

export default ForgotPass;
